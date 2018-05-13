<template>
    <div class="comment-header">
        <span @click="toggleLike" class="like-item">
            <span :class="{liked:liked}" class="heart-icon" v-html="heartIcon"></span>
            <span class="heart-txt">
                <strong>{{store.likedNum}}</strong> Liked
            </span>
        </span>
        <span class="comment-num">
            •
            <strong>{{store.commentsNum}}</strong> Comments
        </span>
        <a href="javascript:void(0)" class="issue-link">Issue Page</a>
        <strong @click="changeSort(true)" :class="{active:store.sortedAsc}" class="sort-item" title="sort by old">ASC</strong>
        <strong class="sort-item">•</strong>
        <strong @click="changeSort(false)" :class="{active:!store.sortedAsc}" class="sort-item" title="sort by new">DESC</strong>
    </div>
</template>

<script>
import store from '../lib/store';
import { heartIcon } from '../lib/icons';

export default {

    data() {
        return {
            heartIcon,
            store,
            liked: true
        };
    },

    methods: {
        toggleLike() {
            this.liked = !this.liked;
        },
        changeSort(ifAsc) {
            this.store.sortedAsc = ifAsc;
        }
    }

};
</script>

<style lang="scss">
.vue-git-comment {
    .comment-header {
        height: 30px;
        font-size: 0;
        .like-item {
            display: inline-block;
            height: 30px;
            cursor: pointer;
            .heart-icon {
                display: inline-block;
                vertical-align: middle;
                svg {
                    width: 30px;
                    height: 30px;
                }
                &.liked svg {
                    fill: #f44336;
                }
            }
        }
        .heart-txt,
        .comment-num,
        .sort-item {
            display: inline-block;
            vertical-align: middle;
            font-size: 14px;
            margin-left: 5px;
        }

        .sort-item {
            float: right;
            color: #666;
            line-height: 30px;
            cursor: pointer;
            &.active {
                color: #f44336;
            }
        }
    }
}
</style>


