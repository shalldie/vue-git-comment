<template>
    <div id="app">
        <VueGitComment :options="options" />
    </div>
</template>

<script>
import VueGitComment from './VueGitComment';

export default {
    name: 'App',
    components: {
        VueGitComment
    },

    data() {
        return {
            options: {
                client_id: '3a657823527f57a63864',
                client_secret: '80714a6e5a35b36043a5dfbd15d43795e95aaa9b',
                owner: 'shalldie',
                repo: 'gitment-store',
                key: 'esaffeffdfdsaflgfdjsa'
            }
        };
    }
}
</script>

<style>
html,
body {
    margin: 0;
    padding: 0;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    max-width: 700px;
    margin: 50px auto 0;
    padding: 0 15px;
    box-sizing: border-box;
    /* border: 1px solid #ddd; */
}
</style>
