<template>
    <div class="vue-git-comment">
        <CommentHeader />
    </div>
</template>

<script>
import CommentHeader from '../components/CommentHeader';

export default {

    components: {
        CommentHeader
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
