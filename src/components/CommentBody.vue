<template>
    <div class="comment-body">
        <div v-if="creating">Be creating...</div>
        <div v-else-if="!store.issue.created&&store.owner===store.userInfo.name">
            Seems new,
            <a @click="createIssue" href="javascript:void(0)">Click</a>
            to create an issue.
        </div>
        <div v-else-if="store.comments.loading" class="comment-loading" v-html="spinnerIcon"></div>
        <div v-else class="comment-list">
            <div v-for="(item,index) in store.comments.list" :key="index" class="markdown-body comment-list-item">
                <img :src="item.user.avatar_url" class="user-avatar">
                <div class="comment-item-main">
                    <div class="cim-header">
                        <a class="cim-name" target="_blank" :href="item.user.link">{{item.user.name}}</a>
                        <span class="cim-time">commented at
                            <span style="white-space:nowrap">{{item.created_at}}</span>
                        </span>
                        <span @click="toggleHeart(index)" class="cim-heart-item" :class="{liked:ifHeart(index),disabled:!store.ifLogin}">
                            <span class="cim-heart-icon" v-html="heartIcon"></span>
                            <span class="cim-heart-num">{{item.likedList.length||''}}</span>
                        </span>
                    </div>
                    <div class="cim-body" v-html="item.body"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from '../lib/store';
import { heartIcon, spinnerIcon } from '../lib/icons';
import gitComment from '../lib/gitComment';
import * as github from '../lib/github';

export default {
    data() {
        return {
            store,
            heartIcon,
            spinnerIcon,
            creating: false
        };
    },

    methods: {
        createIssue() {
            this.creating = true;
            gitComment.createIssue()
                .then(() => {
                    this.creating = false;
                    store.issue.created = true;
                    gitComment.init();
                });
        },
        /**
         * 是否 `heart`
         */
        ifHeart(index) {
            let list = store.comments.list[index].likedList;
            return list.filter(item => item.name == store.userInfo.name).length > 0;
        },

        toggleHeart(index) {
            if (!store.ifLogin) {
                return;
            }
            let commentItem = store.comments.list[index];
            if (this.ifHeart(index)) {
                let heartId = commentItem.likedList
                    .filter(item => item.name == store.userInfo.name)[0].id;
                github.deleteCommentHeart(heartId)
                    .then(() => {
                        commentItem.likedList = commentItem.likedList
                            .filter(n => n.name != store.userInfo.name);
                        store.comments.list = store.comments.list.slice();
                    });
                return;
            }
            github.heartComment(commentItem.id)
                .then(result => {
                    commentItem.likedList.push({
                        id: result.id,
                        name: result.user.login
                    });
                    store.comments.list = store.comments.list.slice();
                });
        }
    }
};
</script>

<style lang="scss">
.vue-git-comment {
    .comment-body {
        margin: 15px 0;

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
                margin-bottom: 18px;

                .user-avatar {
                    position: absolute;
                    width: 44px;
                    height: 44px;
                    border-radius: 3px;
                    left: 0;
                    top: 0;
                }

                .comment-item-main {
                    margin-left: 60px;
                    border: 1px solid #cfd8dc;
                    // min-height: 100px;
                    padding: 0 15px;

                    .cim-header {
                        position: relative;
                        // height: 20px;
                        line-height: 20px;
                        margin: 12px 0;

                        .cim-name {
                            color: #666;
                            font-size: 14px;
                            font-weight: bold;
                            text-decoration: none;
                            &:hover {
                                text-decoration: underline;
                            }
                        }

                        .cim-time {
                            color: #666;
                            font-size: 14px;
                        }

                        .cim-heart-item {
                            position: absolute;
                            right: 0;
                            top: 0;
                            display: inline-block;
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
                    }
                }
            }
        }
    }
}
</style>


