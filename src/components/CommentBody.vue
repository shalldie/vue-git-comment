<template>
    <div class="comment-body">
        <div v-if="!store.issue.created&&store.owner===store.userInfo.name">
            Seems new,
            <a href="javascript:void(0)">Click</a>
            to create an issue.
        </div>
        <div v-else-if="store.comments.loading" class="comment-loading">loading ...</div>
        <div v-else class="comment-list">
            <div v-for="(item,index) in store.comments.list" :key="index" class="markdown-body comment-list-item">
                <img :src="item.user.avatar_url" class="user-avatar">
                <div class="comment-item-main">
                    <div class="cim-header">
                        <a class="cim-name" :href="item.user.link">{{item.user.name}}</a>
                        <span class="cim-time">commented on {{item.created_at}}</span>
                        <span class="cim-heart-icon" v-html="heartIcon"></span>
                    </div>
                    <div class="cim-body" v-html="item.body"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from '../lib/store';
import { heartIcon } from '../lib/icons';

export default {
    data() {
        return {
            store,
            heartIcon
        };
    }
};
</script>

<style lang="scss">
.vue-git-comment {
    .comment-body {
        margin: 15px 0;

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
                        height: 20px;
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

                        .cim-heart-icon {
                            float: right;
                            width: 20px;
                            height: 20px;
                            svg {
                                fill: #333;
                                width: 20px;
                                height: 20px;
                            }
                        }
                    }

                    .cim-body {
                    }
                }
            }
        }
    }
}
</style>


