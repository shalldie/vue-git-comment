<template>
    <div class="vue-git-comment">
        <CommentHeader />
        <CommentBody />
        <CommentPagination />
        <CommentEditor />
    </div>
</template>

<script>
import CommentHeader from '../components/CommentHeader';
import CommentBody from '../components/CommentBody';
import CommentPagination from '../components/CommentPagination';
import CommentEditor from '../components/CommentEditor';

export default {

    components: {
        CommentHeader,
        CommentBody,
        CommentPagination,
        CommentEditor
    },

    created() {
        new Promise(res => {
            setTimeout(() => {
                res(10);
            }, 10);
        }).then(n => console.log(n));
    }
};
</script>

<style lang="scss">
@import './github-markdown.css';

.vue-git-comment {
    color: #333;
    font-family: sans-serif;

    * {
        box-sizing: border-box;
    }

    :disabled {
        cursor: not-allowed;
    }

    .has-border {
        &::before,
        &::after {
            content: '';
            position: absolute;
            border: 8px solid transparent;
            border-right-color: #cfd8dc;
            right: 100%;
            top: 6px;
        }

        &::after {
            border-width: 7px;
            border-right-color: #fff;
            top: 7px;
        }
    }
}
</style>
