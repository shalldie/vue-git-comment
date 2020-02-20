import VueGitComment from './VueGitComment.vue';
// import { StateStore } from '../lib/store';

VueGitComment['install'] = function(Vue) {
    Vue.component('vue-git-comment', VueGitComment);
};

export default VueGitComment;

// export type IOptions = StateStore['options'];
