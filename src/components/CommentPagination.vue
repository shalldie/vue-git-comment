<template>
    <ul class="comment-pagination">
        <!-- <li @click="prevPage" :class="{disabled:store.comments.page<=1}" class="comment-page-item">Prev page</li> -->
        <li
            @click="fetchPage(index + 1)"
            v-for="(item, index) in pageCount"
            :key="index"
            :class="{ disabled: index + 1 == store.comments.page }"
            class="comment-page-item"
        >
            {{ index + 1 }}
        </li>
        <li @click="nextPage" :class="{ disabled: store.comments.page >= pageCount }" class="comment-page-item">
            {{ i('Next page') }}
        </li>
    </ul>
</template>

<script lang="ts">
import { Component, Vue, Inject } from 'vue-property-decorator';
import store, { StateStore } from '../lib/store';
import gitComment from '../lib/gitComment';
import i18n from '../lib/i18n';

@Component
export default class CommentPagination extends Vue {
    i = i18n;

    @Inject()
    store!: StateStore;

    get pageCount() {
        const { per_page, count } = this.store.comments;
        return Math.ceil(count / per_page) || 1;
    }

    nextPage() {
        this.fetchPage(this.store.comments.page + 1);
    }

    fetchPage(page: number) {
        if (this.store.comments.page === page || page <= 0 || page > this.pageCount) {
            return;
        }
        store.comments.page = page;
        gitComment.getCurrentPage();
    }
}
</script>

<style lang="scss">
.vue-git-comment {
    .comment-pagination {
        margin: 20px 0;
        padding: 0;
        @include flex;
        justify-content: flex-end;

        .comment-page-item {
            display: inline-block;
            cursor: pointer;
            border: 1px solid $BORDER_COLOR;
            border-left: none;
            height: 30px;
            line-height: 28px;
            padding: 0 12px;
            font-size: 12px;
            &:first-child {
                border-left: 1px solid $BORDER_COLOR;
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
