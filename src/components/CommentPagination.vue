<template>
    <ul class="comment-pagination">
        <li @click="prevPage" :class="{disabled:store.comments.page<=1}" class="comment-page-item">Prev page</li>
        <li @click="fetchPage(index+1)" v-for="(item,index) in pageCount" :key="index" :class="{disabled:index+1==store.comments.page}" class="comment-page-item">{{index+1}}</li>
        <li @click="nextPage" :class="{disabled:store.comments.page>=pageCount}" class="comment-page-item">Next page</li>
    </ul>
</template>

<script>
import store from '../lib/store';
import * as github from '../lib/github';
import gitComment from '../lib/gitComment';

export default {
    data() {
        return {
            store
        };
    },

    computed: {
        pageCount() {
            const { per_page, count } = this.store.comments;
            return Math.ceil(count / per_page) || 1;
        }
    },

    methods: {
        prevPage() {
            this.fetchPage(store.comments.page - 1);
        },
        nextPage() {
            this.fetchPage(store.comments.page + 1);
        },
        fetchPage(page) {
            if (store.comments.page == page) {
                return;
            }
            store.comments.page = page;
            gitComment.getCurrentPage();
        }
    }
};
</script>

<style lang="scss">
.vue-git-comment {
    .comment-pagination {
        margin: 10px 0;
        padding: 0;
        text-align: right;
        font-size: 0;
        .comment-page-item {
            display: inline-block;
            cursor: pointer;
            border: 1px solid #cfd8dc;
            border-left: none;
            // margin-left: -1px;
            height: 30px;
            line-height: 28px;
            padding: 0 12px;
            font-size: 12px;
            &:first-child {
                border-left: 1px solid #cfd8dc;
            }
            &:hover,
            &.disabled {
                background-color: #f5f5f5;
            }
            &.disabled {
                cursor: default;
            }
        }
    }
}
</style>
