<template>
    <div class="comment-body">
        <div v-if="creating">Creating...</div>
        <div v-else-if="!store.issue.created && store.options.owner === store.userInfo.name">
            Seems new,
            <a @click="createIssue" href="javascript:void(0)">Click</a>
            to create an issue.
        </div>
        <div v-else-if="store.comments.loading" class="comment-loading" v-html="spinnerIcon"></div>
        <div v-else class="comment-list">
            <div v-for="(item, index) in store.comments.list" :key="index" class="markdown-body comment-list-item">
                <a :href="item.user.link" target="_blank">
                    <img :src="item.user.avatar_url" class="user-avatar" />
                </a>
                <div class="comment-item-main border-arrow">
                    <!-- 评论的头部 -->
                    <div class="cim-header">
                        <!-- 评论信息部分 -->
                        <div class="cim-info-wrap">
                            <a class="cim-name" target="_blank" :href="item.user.link">{{ item.user.name }}</a>
                            <span class="cim-time"> commented on </span>
                            <span class="cim-time">{{ item.created_at }}</span>
                        </div>
                        <!-- 评论的反馈 reaction -->
                        <div class="cim-reaction">
                            <!-- heart -->
                            <span
                                @click="toggleHeart(index)"
                                class="cim-heart-item"
                                :class="{ liked: heartMap[index], disabled: !store.state.ifLogin }"
                            >
                                <!-- heart 的icon -->
                                <span v-if="!item.heartLoading" class="cim-heart-icon" v-html="heartIcon"></span>
                                <!-- loading 的icon -->
                                <span v-else class="cim-heart-icon vgc-rotate" v-html="spinnerIcon"></span>
                                <span class="cim-heart-num">{{ item.likedList.length || '' }}</span>
                            </span>
                            <!-- reply -->
                            <span @click="handleReply(item)" class="cim-reply-item" v-html="replyIcon"></span>
                        </div>
                    </div>
                    <div class="cim-body" v-html="item.body_html"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, InjectReactive } from 'vue-property-decorator';
import { StateStore } from '../lib/store';
import gitComment from '../lib/gitComment';
import { heartIcon, spinnerIcon, replyIcon } from '../lib/icons';
import * as github from '../lib/github';
import CommentEditor from './CommentEditor.vue';

@Component
export default class CommentBody extends Vue {
    heartIcon = heartIcon;
    spinnerIcon = spinnerIcon;
    replyIcon = replyIcon;

    creating = false;

    @InjectReactive()
    store!: StateStore;

    /**
     * 是否 `heart` 的字典
     */
    get heartMap() {
        return this.store.comments.list.map(n => {
            return n.likedList.some(item => item.name == this.store.userInfo.name);
        });
    }

    createIssue() {
        this.creating = true;
        gitComment.createIssue().then(() => {
            this.creating = false;
            this.store.issue.created = true;
            gitComment.init(this.store.options);
        });
    }

    toggleHeart(index) {
        if (!this.store.state.ifLogin) {
            return;
        }
        const loadingKey = 'heartLoading';
        const commentItem = this.store.comments.list[index];

        if (commentItem[loadingKey]) {
            return;
        }

        Vue.set(commentItem, loadingKey, true);
        if (this.heartMap[index]) {
            const heartId = commentItem.likedList.filter(item => item.name == this.store.userInfo.name)[0].id;
            github.deleteCommentHeart(heartId).then(() => {
                commentItem.likedList = commentItem.likedList.filter(n => n.name != this.store.userInfo.name);
                // this.store.comments.list = this.store.comments.list.slice();
                Vue.set(commentItem, loadingKey, false);
            });
            return;
        }
        github.heartComment(commentItem.id + '').then(result => {
            commentItem.likedList.push({
                id: result.id,
                name: result.user.login
            });
            Vue.set(commentItem, loadingKey, false);
            // this.store.comments.list = this.store.comments.list.slice();
        });
    }

    handleReply(item: StateStore['comments']['list'][number]) {
        const content = [`@${item.user.name}`, ...item.body.split('\n')].map(line => `> ${line}`).join('\n') + '\n';
        const editor = this.$parent.$refs.editor as CommentEditor;
        editor.showArea = true;
        this.$nextTick(() => {
            editor.areaContent = content;
            (editor.$refs.editor as HTMLTextAreaElement).focus();
        });
    }
}
</script>

<style lang="scss">
.vue-git-comment {
    .comment-body {
        margin-top: 15px;
        overflow: hidden;

        .comment-loading {
            text-align: center;

            svg {
                fill: #333;
                width: 60px;
                height: 60px;
                animation: vue-git-comment-rotate 2s linear infinite;
            }
        }

        .comment-list {
            position: relative;

            .comment-list-item {
                position: relative;
                @include flex;
                align-items: flex-start;

                &:not(:last-child) {
                    margin-bottom: 18px;
                }

                // 头像部分
                .user-avatar {
                    // position: absolute;
                    width: 44px;
                    height: 44px;
                    border-radius: 3px;
                }
                // 评论正文部分
                .comment-item-main {
                    @include flex-item;
                    position: relative;
                    margin-left: 20px;
                    border: 1px solid #cfd8dc;
                    // min-height: 100px;
                    padding: 0 15px;

                    // 评论 header
                    .cim-header {
                        position: relative;
                        // height: 24px;
                        line-height: 24px;
                        margin: 12px 0;
                        @include flex;
                        align-items: flex-start;

                        // 评论信息概要
                        .cim-info-wrap {
                            @include flex-item;
                            margin-right: 15px;
                            // @include flex;

                            .cim-name {
                                color: #666;
                                font-size: 14px;
                                font-weight: bold;
                                text-decoration: none;
                                &:hover {
                                    color: $LINK_COLOR;
                                    text-decoration: underline;
                                }
                            }

                            .cim-time {
                                color: #666;
                                font-size: 14px;
                                // margin-right: 30px;
                            }
                        }

                        // 评论的 reaction 反馈
                        .cim-reaction {
                            margin-left: auto;
                            @include before-middle;
                            margin-top: -3px; // svg 微调
                            font-size: 0;

                            // heart
                            .cim-heart-item {
                                @include inline-middle;
                                cursor: pointer;
                                height: 20px;
                                line-height: 20px;

                                > .cim-heart-icon,
                                > .cim-heart-num {
                                    display: inline-block;
                                    vertical-align: middle;
                                }

                                .cim-heart-icon {
                                    width: 20px;
                                    height: 20px;
                                    svg {
                                        fill: #333;
                                        width: 20px;
                                        height: 20px;
                                    }
                                }

                                &.liked {
                                    color: #f44336;
                                    svg {
                                        fill: #f44336;
                                    }
                                }

                                .cim-heart-num {
                                    line-height: 20px;
                                    font-size: 14px;
                                }
                            }

                            // reply
                            .cim-reply-item {
                                @include inline-middle;
                                margin-left: 15px;
                                cursor: pointer;
                                width: 16px;
                                height: 16px;
                                svg {
                                    fill: #586069;
                                    width: 16px;
                                    height: 16px;
                                }

                                &:hover svg {
                                    fill: $LINK_COLOR;
                                }
                            }
                        }
                    }

                    .cim-body {
                        overflow: hidden;
                    }
                }
            }
        }
    }
}
</style>
