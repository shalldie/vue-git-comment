<template>
    <div class="comment-header">
        <!-- `喜欢` 部分 -->
        <span
            @click="toggleHeart"
            class="like-item"
            :class="{ disabled: !store.state.ifLogin, 'vgc-busy': issueHeartLoading }"
        >
            <!-- loading -->
            <span v-if="issueHeartLoading" class="heart-icon vgc-rotate" v-html="spinnerIcon"></span>
            <!-- heart -->
            <span v-else :class="{ liked: liked }" class="heart-icon" v-html="heartIcon"></span>
            <span class="heart-txt">
                <strong>{{ store.issue.likedList.length }}</strong>
                <span> {{ i('Liked') }}</span>
            </span>
        </span>
        <!-- 分割点 -->
        <span class="split-point">•</span>
        <!-- 评论数 -->
        <a :href="store.issue.html_url" target="_blank" class="comment-num">
            <strong>{{ store.comments.count }}</strong>
            <span> {{ i('Comments') }}</span>
        </a>
        <!-- 排序 -->
        <div class="sort-item-wrap">
            <strong @click="changeSort(false)" :class="{ active: !store.comments.sortedAsc }" class="sort-item">
                {{ i('Latest') }}
            </strong>
            <strong class="split-point">•</strong>
            <strong @click="changeSort(true)" :class="{ active: store.comments.sortedAsc }" class="sort-item">
                {{ i('Earliest') }}
            </strong>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Inject } from 'vue-property-decorator';
import store, { StateStore } from '../lib/store';
import gitComment from '../lib/gitComment';
import { heartIcon, spinnerIcon } from '../lib/icons';
import * as github from '../lib/github';
import i18n from '../lib/i18n';

@Component
export default class CommentHeader extends Vue {
    i = i18n;

    spinnerIcon = spinnerIcon; // loading icon

    heartIcon = heartIcon; // heart icon

    issueHeartLoading = false; // issue heart 是否在请求中

    @Inject()
    store!: StateStore;

    get liked(): boolean {
        return this.store.issue.likedList.some(n => n.name === this.store.userInfo.name);
    }

    toggleHeart() {
        if (!this.store.state.ifLogin || this.issueHeartLoading) {
            return;
        }

        this.issueHeartLoading = true;
        // 如果`喜欢`了，去取消喜欢
        if (this.liked) {
            const LikedItem = store.issue.likedList.find(n => n.name == store.userInfo.name);
            LikedItem &&
                github.deleteIssueHeart(LikedItem.id).then(() => {
                    this.issueHeartLoading = false;
                    store.issue.likedList = store.issue.likedList.filter(n => n.name != store.userInfo.name);
                });
            return;
        }
        // 否则去 `喜欢`
        github.heartIssue().then(item => {
            this.issueHeartLoading = false;
            store.issue.likedList.push({
                id: item.id,
                name: item.user.login
            });
        });
    }

    changeSort(ifAsc: boolean) {
        // 懒得写watch了，就这么处理吧
        if (this.store.comments.sortedAsc == ifAsc) {
            return;
        }
        this.store.comments.sortedAsc = ifAsc;
        this.store.comments.page = 1;
        gitComment.getCurrentPage();
    }
}
</script>

<style lang="scss">
.vue-git-comment {
    .comment-header {
        font-size: 14px;
        height: $HEADER_HEIGHT;
        line-height: $HEADER_HEIGHT;
        // border-bottom: 1px solid $BORDER_COLOR;
        // background: #ddd;
        @include flex;

        // `喜欢` 部分
        .like-item {
            height: $HEADER_HEIGHT;
            cursor: pointer;
            @include flex;

            > span {
                // @include inline-middle;
                height: $HEADER_HEIGHT;
            }
            // margin-left: -5px;
            .heart-icon {
                // display: inline-block;
                // vertical-align: middle;
                svg {
                    width: 30px;
                    height: 30px;
                }
                &.liked svg {
                    fill: #f44336;
                }
            }
            .heart-txt {
                margin-left: 5px;
            }
        }
        // 分割点
        .split-point {
            margin: 0 5px;
        }

        // 评论
        .comment-num {
            color: #333;
            cursor: pointer;
            text-decoration: none;

            &:hover {
                color: $LINK_COLOR;
                text-decoration: underline;
            }
        }

        .sort-item-wrap {
            margin-left: auto;

            .sort-item {
                font-size: 14px;
                cursor: pointer;

                &.active {
                    color: #f44336;
                }
            }
        }
    }
}
</style>
