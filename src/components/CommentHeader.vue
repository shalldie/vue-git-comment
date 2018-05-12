<template>
    <div class="comment-header">
        <span class="like-item">
            <span class="heart-icon" v-html="heartIcon"></span>
            <span class="heart-txt">
                <strong>{{store.likedNum}}</strong> Liked
            </span>
        </span>
        <span class="comment-num">
            •
            <strong>{{store.commentsNum}}</strong> Comments
        </span>
        <a href="javascript:void(0)" class="issue-link">Issue Page</a>
    </div>
</template>

<script>
import store from '../lib/store';
import { heartIcon } from '../lib/icons';

export default {

    data() {
        return {
            heartIcon,
            store
        };
    }

};
</script>

<style lang="scss">
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
        }
    }
    .heart-txt,
    .comment-num,
    .issue-link {
        display: inline-block;
        vertical-align: middle;
        font-size: 14px;
        margin-left: 5px;
    }

    .issue-link {
        float: right;
        color: #666;
        text-decoration: none;
        line-height: 30px;
        &:hover {
            text-decoration: underline;
        }
    }
}
</style>


