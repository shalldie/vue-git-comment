<template>
    <div class="comment-editor">
        <!-- 没登陆，且没loading， 显示github的icon -->
        <span
            v-if="!state.ifLogin && !state.userInfo.loading"
            class="user-avatar user-avatar-github"
            v-html="icons.githubIcon"
        ></span>
        <!-- 正在登陆的适合，显示 loading -->
        <span
            v-else-if="state.userInfo.loading"
            class="user-avatar user-avatar-loading"
            v-html="icons.spinnerIcon"
        ></span>
        <!-- 其它，登陆的情况下 -->
        <a v-else :href="state.userInfo.htmlUrl" target="_blank">
            <img class="user-avatar user-avatar-img" :src="state.userInfo.avatarUrl" />
        </a>
        <!-- 编辑器容器 -->
        <div class="comment-editor-main">
            <div class="ce-header border-arrow">
                <div @click="showArea = true" :class="{ active: showArea }" class="ce-tab-item">{{ i('Write') }}</div>
                <div @click="showArea = false" :class="{ active: !showArea }" class="ce-tab-item">
                    {{ i('Preview') }}
                </div>
                <div class="login-wrap">
                    <template v-if="!state.ifLogin">
                        <a @click="login" href="javascript:void(0)">{{ i('Login') }}</a>
                        <span> {{ i('with Github') }}</span>
                    </template>
                    <span v-else @click="logOut" class="logout-link">{{ i('Logout') }}</span>
                </div>
            </div>
            <div class="ce-body">
                <textarea
                    ref="editor"
                    v-model="areaContent"
                    v-show="showArea"
                    :disabled="!state.ifLogin || submitting"
                    class="ce-textarea"
                    :placeholder="i('Leave a comment.')"
                ></textarea>
                <div v-show="!showArea" class="markdown-body ce-preview" v-html="markdownContent"></div>
            </div>
            <div class="ce-comment-row">
                <div class="ce-link-wrap">
                    <a class="ce-md-link" target="_blank" href="https://guides.github.com/features/mastering-markdown/">
                        Markdown is supported
                    </a>
                </div>

                <button :disabled="!state.ifLogin || submitting" @click="comment" class="ce-comment-btn">
                    {{ submitting ? `${i('Submitting')} ...` : i('Comment') }}
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
import { Watch, Component, BaseComponent } from '~/lib/decorators';
import * as github from '~/lib/github';
import { addTargetBlank } from '~/lib/utils';
import { gm } from '~/lib/gitcomment';
import { i18n } from '~/lib/i18n';

@Component
export default class CommentHeader extends BaseComponent {
    showArea = true; // 是否展示 textarea

    submitting = false;

    areaContent = '';

    markdownContent = i18n('Nothing to preview');

    cacheList: { content: string; preview: string }[] = [];

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
        gm.logIn();
    }

    logOut() {
        gm.logOut();
    }

    async comment() {
        if (!this.areaContent.trim().length) {
            return;
        }
        this.submitting = true;

        await github.createComment(this.areaContent);
        this.areaContent = '';
        this.submitting = false;
        this.showArea = true;
        return gm.fetchCurrentPage(true);
    }

    @Watch('showArea')
    async handleShowAreaChange(ifShowArea: boolean) {
        this.areaContent = this.areaContent.trim();
        if (ifShowArea || !this.areaContent.length) {
            this.markdownContent = this.i('Nothing to preview');
            return;
        }

        // 尝试从缓存获取
        const cache = this.getCache(this.areaContent);
        if (cache) {
            this.markdownContent = cache;
            return;
        }

        // 从接口获取，并缓存
        this.markdownContent = this.i('Loading preview ...');

        const result = await github.getMarkDown(this.areaContent);
        const body = addTargetBlank(result);
        this.markdownContent = body;
        this.addCache(this.areaContent, body);
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
                border-bottom-color: transparent;
                @include flex;

                // tab
                .ce-tab-item {
                    height: $TAB_HEIGHT;
                    padding: 0 12px;
                    cursor: pointer;
                    border: 1px solid transparent;

                    &:nth-child(1) {
                        border-left: none;
                        border-right: none;
                        border-bottom-color: $BORDER_COLOR;
                    }

                    &:nth-child(2) {
                        border-left-color: $BORDER_COLOR;
                        border-bottom-color: $BORDER_COLOR;
                    }

                    &.active {
                        border-right-color: $BORDER_COLOR;
                        border-bottom-color: transparent;
                    }
                }

                // login,logout
                .login-wrap {
                    @include flex-item;
                    padding-right: 12px;
                    text-align: right;
                    // margin-left: auto;
                    border-top: 1px solid transparent;
                    border-bottom: 1px solid $BORDER_COLOR;
                    line-height: $TAB_HEIGHT - 2;

                    a {
                        text-decoration: none;
                    }

                    .logout-link {
                        &:hover {
                            cursor: pointer;
                            color: $LINK_COLOR;
                        }
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
                    background: transparent;
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
