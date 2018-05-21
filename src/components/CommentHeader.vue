<template>
    <div class="comment-header">
        <span @click="toggleLike" class="like-item">
            <span :class="{liked:liked}" class="heart-icon" v-html="heartIcon"></span>
            <span class="heart-txt">
                <strong>{{store.issue.likedList.length}}</strong> Liked
            </span>
        </span>
        <span class="comment-num">
            •
            <strong>{{store.comments.count}}</strong> Comments
        </span>
        <a href="javascript:void(0)" class="issue-link">Issue Page</a>
        <strong @click="changeSort(true)" :class="{active:store.comments.sortedAsc}" class="sort-item" title="sort by old">Old</strong>
        <strong class="sort-item" style="cursor:default;">•</strong>
        <strong @click="changeSort(false)" :class="{active:!store.comments.sortedAsc}" class="sort-item" title="sort by new">New</strong>
    </div>
</template>

<script>
import store from '../lib/store';
import { heartIcon } from '../lib/icons';
import * as github from '../lib/github';

export default {

    data() {
        return {
            heartIcon,
            store
            // liked: true
        };
    },

    computed: {
        liked() {
            return ~store.issue.likedList
                .map(n => n.name).indexOf(store.userInfo.name);
        }
    },

    methods: {
        toggleLike() {
            if (this.liked) {
                let heartId = store.issue.likedList
                    .filter(n => n.name == store.userInfo.name)[0].id;
                github.deleteIssueHeart(heartId)
                    .then(n => {
                        store.issue.likedList = store.issue.likedList
                            .filter(n => n.name != store.userInfo.name);
                    })
                return;
            }
            github.heartIssue()
                .then(item => {
                    store.issue.likedList.push({
                        id: item.id,
                        name: item.user.login
                    });
                })
        },
        changeSort(ifAsc) {
            this.store.comments.sortedAsc = ifAsc;
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
            margin-left: -5px;
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


