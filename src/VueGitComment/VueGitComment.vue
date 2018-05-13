<template>
    <div class="vue-git-comment">
        <CommentHeader />
        <CommentBody />
        <CommentPagination />
        <CommentFooter />
    </div>
</template>

<script>
import CommentHeader from '../components/CommentHeader';
import CommentBody from '../components/CommentBody';
import CommentPagination from '../components/CommentPagination';
import CommentFooter from '../components/CommentFooter';

export default {

    components: {
        CommentHeader,
        CommentBody,
        CommentPagination,
        CommentFooter
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
}
</style>
