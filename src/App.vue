<template>
    <div id="app">
        <button @click="toggleBgcolor" style="padding: 4px;">toggle backgroundColor</button>
        <br />
        <br />
        <br />
        <VueGitComment :options="options" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VueGitComment from './VueGitComment';

import { StateStore } from './lib/store';

@Component({
    components: {
        VueGitComment
    }
})
export default class App extends Vue {
    options: StateStore['options'] = {
        client_id: '3a657823527f57a63864',
        client_secret: '80714a6e5a35b36043a5dfbd15d43795e95aaa9b',
        owner: 'shalldie',
        repo: 'gitment-store',
        uuid: 'esaffffdfdsaflgfdjsa',
        language: 'zh-CN'
    };

    toggleBgcolor() {
        const body = document.body;
        if (body.hasAttribute('style')) {
            body.removeAttribute('style');
            return;
        }
        body.setAttribute('style', 'background: #f8f8f8');
    }
}
</script>

<style lang="scss">
html,
body {
    margin: 0;
    padding: 0;
    background: #fff;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    max-width: 800px;
    margin: 50px auto 0;
    padding: 0 15px;
    box-sizing: border-box;
    /* border: 1px solid #ddd; */
}
</style>
