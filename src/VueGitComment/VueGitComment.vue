<template>
    <div class="vue-git-comment">
        <CommentHeader />
        <CommentBody />
        <CommentPagination />
        <CommentEditor ref="editor" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, ProvideReactive } from 'vue-property-decorator';
import store, { StateStore } from '../lib/store';
import gitComment from '../lib/gitComment';
import CommentHeader from '@/components/CommentHeader.vue';
import CommentBody from '@/components/CommentBody.vue';
import CommentPagination from '@/components/CommentPagination.vue';
import CommentEditor from '@/components/CommentEditor.vue';

@Component({
    components: {
        CommentHeader,
        CommentBody,
        CommentPagination,
        CommentEditor
    }
})
export default class VueGitComment extends Vue {
    /**
     * 组件配置
     */
    @Prop()
    private options!: StateStore['options'];

    /**
     * 全局store
     */
    @ProvideReactive()
    store = store;

    /**
     * 当配置更新，重新初始化组件
     */
    @Watch('options', { deep: true, immediate: true })
    handleOptionsChange(options: StateStore['options']) {
        gitComment.init(options);
    }
}
</script>

<style lang="scss">
@import '../assets/styles/github-markdown.css';

@keyframes vue-git-comment-rotate {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}

.vue-git-comment {
    background: $BG_COLOR;
    color: #333;
    font-family: sans-serif;

    // 全局 border-box
    * {
        box-sizing: border-box;
    }

    // 禁用手势
    :disabled,
    .disabled {
        cursor: not-allowed !important;
    }

    // 转动效果
    .vgc-rotate {
        animation: vue-git-comment-rotate 2s linear infinite;
    }

    .border-arrow {
        &::before,
        &::after {
            content: '';
            position: absolute;
            border: 8px solid transparent;
            border-right-color: $BORDER_COLOR;
            right: 100%;
            top: 6px;
        }

        &::after {
            border-width: 7px;
            border-right-color: $BG_COLOR;
            top: 7px;
        }
    }
    a {
        color: $LINK_COLOR;
    }
}
</style>
