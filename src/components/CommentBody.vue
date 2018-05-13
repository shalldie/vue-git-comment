<template>
    <div class="comment-body">
        <div v-if="!store.commentList.length" class="comment-loading">loading ...</div>
        <div v-else class="comment-list">

        </div>
    </div>
</template>

<script>
import store from '../lib/store';

export default {
    data() {
        return {
            store
        };
    }
};
</script>

<style lang="scss">
.vue-git-comment {
    .comment-body {
        margin: 15px 0;
    }
}
</style>


