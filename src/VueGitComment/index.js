import VueGitComment from './VueGitComment';

VueGitComment.install = function (Vue) {
    Vue.component('vue-git-comment', VueGitComment);
};

export default VueGitComment;
