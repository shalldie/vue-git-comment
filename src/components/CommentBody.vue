<template>
    <div class="comment-body">
        <div v-if="creating">Creating...</div>
        <div v-else-if="!state.issue.created && state.options.owner === state.userInfo.name">
            {{ i('Seems new,') }}
            <a @click="createIssue" href="javascript:void(0)">{{ i('Click') }}</a>
            {{ i('to create an issue.') }}
        </div>
        <div v-else-if="state.comments.loading" class="comment-loading" v-html="icons.spinnerIcon"></div>
        <div v-else class="comment-list">
            <div v-for="(item, index) in state.comments.list" :key="index" class="vgc-markdown-body comment-list-item">
                <a :href="item.user.link" target="_blank">
                    <img :src="item.user.avatarUrl" class="user-avatar" />
                </a>
                <div class="comment-item-main border-arrow">
                    <!-- 评论的头部 -->
                    <div class="cim-header">
                        <!-- 评论信息部分 -->
                        <div class="cim-info-wrap">
                            <a class="cim-name" target="_blank" :href="item.user.link">{{ item.user.name }}</a>
                            <span class="cim-time"> {{ i('commented on') }} </span>
                            <span class="cim-time">{{ item.createdAt }}</span>
                        </div>
                        <!-- 评论的反馈 reaction -->
                        <div class="cim-reaction">
                            <!-- heart -->
                            <span
                                @click="toggleHeart(index)"
                                class="cim-heart-item"
                                :class="{
                                    liked: heartMap[index],
                                    disabled: !state.ifLogin,
                                    'vgc-busy': item.heartLoading
                                }"
                            >
                                <!-- heart 的icon -->
                                <span v-if="!item.heartLoading" class="cim-heart-icon" v-html="icons.heartIcon"></span>
                                <!-- loading 的icon -->
                                <span v-else class="cim-heart-icon vgc-rotate" v-html="icons.spinnerIcon"></span>
                                <span class="cim-heart-num">{{ item.likedList.length || '' }}</span>
                            </span>
                            <!-- reply -->
                            <span
                                @click="handleReply(item)"
                                :class="{ disabled: !state.ifLogin }"
                                class="cim-reply-item"
                                v-html="icons.replyIcon"
                            ></span>
                        </div>
                    </div>
                    <div class="cim-body" v-html="item.bodyHtml"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, BaseComponent } from '~/lib/decorators';
import { StateStore } from '../lib/store';
import * as github from '../lib/github';
// import CommentEditor from './CommentEditor.vue';
import { gm } from '~/lib/gitcomment';

@Component
export default class CommentHeader extends BaseComponent {
    creating = false;

    /**
     * 是否 `heart` 的字典
     */
    get heartMap() {
        return this.state.comments.list.map(n => {
            return n.likedList.some(item => item.name == this.state.userInfo.name);
        });
    }

    async createIssue() {
        this.creating = true;
        await gm.createIssue();
        this.creating = false;
        this.state.issue.created = true;
        gm.init(this.state.options);
    }

    async toggleHeart(index: number) {
        if (!this.state.ifLogin) {
            return;
        }
        const loadingKey = 'heartLoading';
        const commentItem = this.state.comments.list[index];

        if (commentItem[loadingKey]) {
            return;
        }

        Vue.set(commentItem, loadingKey, true);

        // 没 heart，就去 heart
        if (this.heartMap[index]) {
            const heartId = commentItem.likedList.filter(item => item.name == this.state.userInfo.name)[0].id;
            await github.deleteCommentHeart(heartId);
            commentItem.likedList = commentItem.likedList.filter(n => n.name != this.state.userInfo.name);
            Vue.set(commentItem, loadingKey, false);
            return;
        }
        // 否则去取消 heart
        const result = await github.heartComment(commentItem.id + '');
        commentItem.likedList.push({
            id: result.id,
            name: result.user.login
        });
        Vue.set(commentItem, loadingKey, false);
    }

    handleReply(item: StateStore['state']['comments']['list'][number]) {
        if (!this.store.state.ifLogin) {
            return;
        }

        const content = [`@${item.user.name}`, ...item.body.split('\n')].map(line => `> ${line}`).join('\n') + '\n';

        // todo: 代码优化下
        const editor = this.$parent.$refs.editor as any;
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
                            margin-right: 20px;
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
                                // white-space: nowrap;
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

                                &:not(.disabled):hover svg {
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
