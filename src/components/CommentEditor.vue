<template>
    <div class="comment-editor">
        <!-- 没登陆，且没loading， 显示github的icon -->
        <span
            v-if="!store.state.ifLogin && !store.userInfo.loading"
            class="user-avatar user-avatar-github"
            v-html="githubIcon"
        ></span>
        <!-- 正在登陆的适合，显示 loading -->
        <span v-else-if="store.userInfo.loading" class="user-avatar user-avatar-loading" v-html="spinnerIcon"></span>
        <!-- 其它，登陆的情况下 -->
        <a v-else :href="store.userInfo.html_url" target="_blank">
            <img class="user-avatar user-avatar-img" :src="store.userInfo.avatar_url" />
        </a>
        <!-- 编辑器容器 -->
        <div class="comment-editor-main">
            <div class="ce-header border-arrow">
                <div @click="showArea = true" :class="{ active: showArea }" class="ce-tab-item">Write</div>
                <div @click="showArea = false" :class="{ active: !showArea }" class="ce-tab-item">Preview</div>
                <div v-if="!store.state.ifLogin" class="login-link-btn">
                    <a @click="login" href="javascript:void(0)">Login</a>
                    <span> with Github</span>
                </div>
                <span v-else @click="logOut" class="logout-link">Logout</span>
            </div>
            <div class="ce-body">
                <textarea
                    ref="editor"
                    v-model="areaContent"
                    v-show="showArea"
                    :disabled="!store.state.ifLogin || submitting"
                    class="ce-textarea"
                    placeholder="Leave a comment."
                ></textarea>
                <div v-show="!showArea" class="markdown-body ce-preview" v-html="markdownContent"></div>
            </div>
            <div class="ce-comment-row">
                <div class="ce-link-wrap">
                    <a class="ce-md-link" target="_blank" href="https://guides.github.com/features/mastering-markdown/">
                        Markdown is supported
                    </a>
                </div>

                <button :disabled="!store.state.ifLogin || submitting" @click="comment" class="ce-comment-btn">
                    {{ submitting ? 'Submitting ...' : 'Comment' }}
                </button>
            </div>
            <div class="ce-power-row">
                <span>Powered by </span>
                <a target="_blank" href="https://github.com/shalldie/vue-git-comment">vue-git-comment</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, InjectReactive, Watch } from 'vue-property-decorator';
import { StateStore } from '../lib/store';
import gitComment from '../lib/gitComment';
import { githubIcon, spinnerIcon } from '../lib/icons';
import * as github from '../lib/github';
import { addTargetBlank } from '../lib/utils';

@Component
export default class CommentEditor extends Vue {
    githubIcon = githubIcon;

    spinnerIcon = spinnerIcon;

    showArea = true; // 是否展示 textarea

    submitting = false;

    areaContent = '';

    markdownContent = 'Nothing to preview';

    cacheList: { content: string; preview: string }[] = [];

    @InjectReactive()
    store!: StateStore;

    getCache(content) {
        const item = this.cacheList.find(n => n.content === content);
        if (item) {
            return item.preview;
        }
    }

    addCache(content, preview) {
        this.cacheList.push({ content, preview });
        if (this.cacheList.length > 10) {
            this.cacheList.shift();
        }
    }

    login() {
        gitComment.login();
    }

    logOut() {
        gitComment.logOut();
    }

    comment() {
        if (this.areaContent.trim().length <= 0) {
            return;
        }
        this.submitting = true;
        github.createComment(this.areaContent).then(() => {
            this.areaContent = '';
            this.submitting = false;
            this.showArea = true;
            return gitComment.getCurrentPage(true);
        });
    }

    @Watch('showArea')
    handleShowAreaChange(ifShowArea: boolean) {
        this.areaContent = this.areaContent.trim();
        if (ifShowArea || !this.areaContent.length) {
            this.markdownContent = 'Nothing to preview';
            return;
        }

        // 尝试从缓存获取
        const cache = this.getCache(this.areaContent);
        if (cache) {
            this.markdownContent = cache;
            return;
        }

        // 从接口获取，并缓存
        this.markdownContent = 'Loading preview ...';
        github.getMarkDown(this.areaContent).then(body => {
            body = addTargetBlank(body);
            this.markdownContent = body;
            this.addCache(this.areaContent, body);
        });
    }
}
</script>

<style lang="scss">
$TAB_HEIGHT: 40px;

.vue-git-comment {
    .comment-editor {
        position: relative;
        // margin: 15px 0;
        @include flex;
        align-items: flex-start;

        // 头像部分
        .user-avatar,
        .user-avatar svg {
            width: 44px;
            height: 44px;
            border-radius: 3px;
            fill: #fff;
        }

        .user-avatar-loading {
            background: none;
            animation: vue-git-comment-rotate 2s linear infinite;
            svg {
                fill: #333;
            }
        }

        .user-avatar-github {
            background: #333;
        }

        .user-avatar-img {
            cursor: pointer;
        }
        // 编辑器
        .comment-editor-main {
            @include flex-item;
            margin-left: 20px;

            .ce-header {
                font-size: 14px;
                position: relative;
                height: $TAB_HEIGHT;
                line-height: $TAB_HEIGHT;
                border: 1px solid $BORDER_COLOR;
                @include flex;

                // tab
                .ce-tab-item {
                    height: $TAB_HEIGHT;
                    margin-top: -1px;
                    padding: 0 12px;
                    cursor: pointer;
                    border: 1px solid transparent;

                    &:nth-child(2) {
                        border-left-color: $BORDER_COLOR;
                        margin-left: -1px;
                    }

                    &.active {
                        border-right-color: $BORDER_COLOR;
                        border-bottom-color: $BG_COLOR;
                    }
                }

                // login,logout
                .login-link-btn,
                .logout-link {
                    margin: -1px 12px 0 auto;
                }

                .login-link-btn {
                    cursor: default;
                    a {
                        text-decoration: none;
                    }
                }

                .logout-link {
                    &:hover {
                        cursor: pointer;
                        color: $LINK_COLOR;
                    }
                }
            }

            // 编辑器部分
            .ce-body {
                position: relative;
                border: 1px solid $BORDER_COLOR;
                border-top: none;

                .ce-textarea {
                    display: block;
                    outline: none;
                    width: 100%;
                    min-height: 150px;
                    padding: 16px;
                    font-size: 14px;
                    resize: none;
                    color: #333;
                    border: none;
                    margin: 0;
                }
                .ce-preview {
                    min-height: 150px;
                    padding: 16px;
                }
            }

            // 编辑器底部行
            .ce-comment-row {
                height: 34px;
                // line-height: 34px;
                margin-top: 10px;
                @include flex;

                .ce-link-wrap {
                    height: 100%;
                    @include flex-item;

                    // markdown support 提示
                    .ce-md-link {
                        font-size: 12px;
                        line-height: 1;
                        color: #333;
                        text-decoration: none;
                        &:hover {
                            color: #2196f3;
                        }
                    }
                }

                .ce-comment-btn {
                    color: #fff;
                    line-height: 34px;
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

            // power by 提示
            .ce-power-row {
                margin: 10px 0;
                text-align: right;
                font-size: 12px;
                line-height: 34px;

                a {
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
