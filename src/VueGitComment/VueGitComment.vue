<template>
    <div class="vue-git-comment">
        This is vue-git-comment.
    </div>
</template>

<script>
export default {
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

</style>
