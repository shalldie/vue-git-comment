<template>
    <div id="app" :class="{ dark: dark }">
        <div class="btn-wrap">
            <button @click="toggle">toggle backgroundColor</button>
        </div>
        <VueGitComment :options="options" />
    </div>
</template>

<script lang="ts">
import { Component, BaseComponent } from '~/lib/decorators';
import { TOptions } from './lib/store';
import VueGitComment from './VueGitComment';

@Component({
    components: {
        VueGitComment
    }
})
export default class App extends BaseComponent {
    dark = false;

    options: TOptions = {
        clientID: '3a657823527f57a63864',
        clientSecret: '80714a6e5a35b36043a5dfbd15d43795e95aaa9b',
        owner: 'shalldie',
        repo: 'gitment-store',
        uuid: 'esaffffdfdsaflgfdjsa',
        // uuid: '/article/cmd-entrypoint-in-dockerfile',
        language: 'zh-CN'
    };

    toggle() {
        this.dark = !this.dark;
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
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color: #333;
    max-width: 1000px;
    margin: 50px auto 0;
    padding: 20px;
    box-sizing: border-box;

    &.dark {
        background: #f8f8f8;
    }

    .btn-wrap {
        margin-bottom: 50px;
        button {
            padding: 4px;
        }
    }
}
</style>
