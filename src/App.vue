<template>
    <div id="app">
        <VueGitComment />
    </div>
</template>

<script>
import VueGitComment from './VueGitComment';

export default {
    name: 'App',
    components: {
        VueGitComment
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    width: 600px;
    margin: 50px auto;
    box-sizing: border-box;
    /* border: 1px solid #ddd; */
}
</style>
