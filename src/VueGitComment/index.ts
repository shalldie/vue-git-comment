import VueGitComment from './VueGitComment.vue';

VueGitComment['install'] = function(Vue) {
    Vue.component('vue-git-comment', VueGitComment);
};

export default VueGitComment;
