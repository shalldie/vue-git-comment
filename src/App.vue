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
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
