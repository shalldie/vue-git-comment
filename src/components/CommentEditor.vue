<template>
    <div class="comment-editor">
        <span class="user-avatar" v-if="!store.ifLogin" href="javascript:void(0)" v-html="githubIcon"></span>
        <div class="comment-editor-main">
            <div class="ce-header">
                <div @click="showArea=true" :class="{active:showArea}" class="ce-tab-item">Write</div>
                <div @click="showArea=false" :class="{active:!showArea}" class="ce-tab-item">Preview</div>
            </div>
            <div class="ce-body">
                <textarea v-model="areaContent" v-show="showArea" :disabled="!store.ifLogin" class="ce-textarea" placeholder="Leave a comment."></textarea>
                <div v-show="!showArea" class="markdown-body ce-preview" v-html="markdownContent"></div>
            </div>
            <div class="ce-commit-row">
                <a class="ce-md-link" target="_blank" href="https://guides.github.com/features/mastering-markdown/">Styling with Markdown is supported</a>
                <button :disabled="!store.ifLogin" class="ce-commit-btn">Comment</button>
            </div>
        </div>
    </div>
</template>

<script>
import store from '../lib/store';
import * as  github from '../lib/github';
import { githubIcon } from "../lib/icons";

export default {

    data() {
        return {
            store,
            githubIcon,
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
                    body = body.replace(/(<a )/g, '$1target="_blank" ');
                    this.markdownContent = body;
                    this.addCache(this.areaContent, body);
                });
        }
    }
};

</script>

<style lang="scss">
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

        .user-avatar {
            position: absolute;
            left: 0;
            top: 0;
            display: inline-block;
            background: #333;
        }

        .comment-editor-main {
            margin-left: 60px;

            .ce-header {
                height: 40px;
                font-size: 0;
                border: 1px solid #cfd8dc;

                .ce-tab-item {
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
            }

            .ce-body {
                .ce-textarea {
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
                    &:hover {
                        background-color: #00acc1;
                    }
                }
            }
        }
    }
}
</style>


