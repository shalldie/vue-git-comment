<template>
    <div class="vue-git-comment">
        <CommentHeader />
        <CommentBody />
        <CommentPagination />
        <CommentEditor ref="editor" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, BaseComponent } from '~/lib/decorators';
import CommentHeader from '~/components/CommentHeader.vue';
import CommentBody from '~/components/CommentBody.vue';
import CommentPagination from '~/components/CommentPagination.vue';
import CommentEditor from '~/components/CommentEditor.vue';
import { gm } from '~/lib/gitcomment';
import { TOptions } from '~/lib/store';

@Component({
    components: {
        CommentHeader,
        CommentBody,
        CommentPagination,
        CommentEditor
    }
})
export default class VueGitComment extends BaseComponent {
    /**
     * 组件配置
     */
    @Prop()
    options!: TOptions;

    /**
     * 当配置更新，重新初始化组件
     */
    @Watch('options', { deep: true })
    handleOptionsChange(options: TOptions) {
        gm.init(options);
    }

    mounted() {
        this.options && this.handleOptionsChange(this.options);
    }
}
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
    color: #333;
    /* font-family: sans-serif; */

    // 全局 border-box
    * {
        box-sizing: border-box;
    }

    // 禁用手势
    :disabled,
    .disabled {
        cursor: not-allowed !important;
    }

    // busy
    .vgc-busy {
        cursor: wait !important;
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
        }

        &::before {
            width: 10px;
            height: 10px;
            left: -6px;
            top: 10px;
            transform: rotate(45deg);
            border: 1px solid #ddd;
            border-width: 0 0 1px 1px;
            background: #fff;
        }
    }
    a {
        color: $LINK_COLOR;
    }
}
</style>
