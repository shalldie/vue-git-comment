<template>
    <div class="comment-editor">
        <span class="user-avatar" v-if="!store.ifLogin&&!store.userInfo.loading" href="javascript:void(0)" v-html="githubIcon"></span>
        <span class="user-avatar user-avatar-loading" v-else-if="!store.ifLogin&&store.userInfo.loading" v-html="spinnerIcon"></span>
        <img class="user-avatar user-avatar-img" v-else :src="store.userInfo.avatar_url">
        <div class="comment-editor-main">
            <div class="ce-header has-border">
                <div @click="showArea=true" :class="{active:showArea}" class="ce-tab-item">Write</div>
                <div @click="showArea=false" :class="{active:!showArea}" class="ce-tab-item">Preview</div>
                <div v-if="!store.ifLogin" class="login-link-btn">
                    <a @click="login" href="javascript:void(0)">Login</a>
                    with Github
                </div>
                <span v-else @click="logOut" class="logout-link">Logout</span>
            </div>
            <div class="ce-body">
                <textarea v-model="areaContent" v-show="showArea" :disabled="!store.ifLogin" class="ce-textarea" placeholder="Leave a comment."></textarea>
                <div v-show="!showArea" class="markdown-body ce-preview" v-html="markdownContent"></div>
            </div>
            <div class="ce-commit-row">
                <a class="ce-md-link" target="_blank" href="https://guides.github.com/features/mastering-markdown/">Styling with Markdown is supported</a>
                <button :disabled="!store.ifLogin" class="ce-commit-btn">Comment</button>
            </div>
            <div class="ce-power-row">
                Powered by
                <a target="_blank" href="https://github.com/shalldie/vue-git-comment">vue-git-comment</a>
            </div>
        </div>
    </div>
</template>

<script>
import store from '../lib/store';
import * as github from '../lib/github';
import { githubIcon, spinnerIcon } from '../lib/icons';
import gitComment from '../lib/gitComment';
import * as _ from '../lib/utils';

export default {

    data() {
        return {
            store,
            githubIcon,
            spinnerIcon,
            showArea: true,
            areaContent: '',
            markdownContent: 'Nothing to preview',
            cacheList: []
        };
    },

    methods: {
        getCache(content) {
            for (let i = 0, len = this.cacheList.length; i < len; i++) {
                let item = this.cacheList[i];
                if (item.content === content) {
                    return item.preview;
                }
            }
        },

        addCache(content, preview) {
            this.cacheList.push({ content, preview });
            if (this.cacheList.length > 10) {
                this.cacheList.shift();
            }
        },

        login() {
            gitComment.login();
        },

        logOut() {
            gitComment.logOut();
        }
    },

    watch: {
        showArea(ifShowArea) {
            if (ifShowArea || !this.areaContent.trim().length) {
                this.markdownContent = 'Nothing to preview';
                return;
            }

            // 尝试从缓存获取
            this.areaContent = this.areaContent.trim();
            let cache = this.getCache(this.areaContent);
            if (cache) {
                this.markdownContent = cache;
                return;
            }

            // 从接口获取，并缓存
            this.markdownContent = 'Loading preview ...';
            github.getMarkDown(this.areaContent)
                .then(body => {
                    body = _.addTargetBlank(body);
                    this.markdownContent = body;
                    this.addCache(this.areaContent, body);
                });
        }
    }
};

</script>

<style lang="scss">
@keyframes vue-git-comment-rotate {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
.vue-git-comment {
    .comment-editor {
        position: relative;
        margin-top: 15px;

        .user-avatar,
        .user-avatar svg {
            width: 44px;
            height: 44px;
            border-radius: 3px;
            fill: #fff;
            cursor: pointer;
        }

        .user-avatar,
        .user-avatar-loading {
            position: absolute;
            left: 0;
            top: 0;
            display: inline-block;
            background: #333;
        }

        .user-avatar-loading {
            background: none;
            animation: vue-git-comment-rotate 2s linear infinite;
            svg {
                fill: #333;
            }
        }

        .user-avatar-img {
            background: none;
        }

        .comment-editor-main {
            margin-left: 60px;

            .ce-header {
                position: relative;
                height: 40px;
                font-size: 0;
                border: 1px solid #cfd8dc;

                .ce-tab-item,
                .login-link-btn {
                    height: 40px;
                    line-height: 40px;
                    display: inline-block;
                    vertical-align: middle;
                    font-size: 14px;
                    padding: 0 12px;
                    cursor: pointer;
                    margin-left: -1px;
                    margin-top: -1px;
                    border: 1px solid transparent;

                    &.active {
                        border-color: #cfd8dc;
                        border-bottom-color: #fff;
                    }
                }

                .login-link-btn {
                    float: right;
                    cursor: default;
                    a {
                        text-decoration: none;
                    }
                }

                .logout-link {
                    float: right;
                    line-height: 40px;
                    font-size: 14px;
                    margin-right: 12px;
                    margin-top: -1px;
                    cursor: pointer;
                    &:hover {
                        color: #2196f3;
                    }
                }
            }

            .ce-body {
                .ce-textarea {
                    display: block;
                    outline: none;
                    width: 100%;
                    min-height: 150px;
                    border: 1px solid #cfd8dc;
                    border-top: none;
                    padding: 16px;
                    font-size: 14px;
                    resize: vertical;
                    background-color: #fff;
                    color: #333;
                }
                .ce-preview {
                    min-height: 150px;
                    border: 1px solid #cfd8dc;
                    border-top: none;
                    background-color: #fff;
                    padding: 16px;
                }
            }

            .ce-commit-row {
                height: 34px;
                line-height: 34px;
                margin-top: 10px;

                .ce-md-link {
                    font-size: 12px;
                    color: #666;
                    text-decoration: none;
                    &:hover {
                        color: #2196f3;
                    }
                }

                .ce-commit-btn {
                    color: #fff;
                    float: right;
                    height: 34px;
                    font-size: 14px;
                    font-weight: bold;
                    padding: 0 12px;
                    background-color: #00bcd4;
                    outline: none;
                    border: none;
                    cursor: pointer;
                    &:hover {
                        background-color: #00acc1;
                    }
                }
            }

            .ce-power-row {
                margin-top: 10px;
                text-align: right;
                font-size: 12px;
                a {
                    color: #2196f3;
                    text-decoration: none;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}
</style>


