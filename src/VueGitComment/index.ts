import '~/assets/styles/github-markdown.scss';
import VueGitComment from './VueGitComment.vue';

VueGitComment['install'] = Vue => {
    Vue.component(VueGitComment.name, VueGitComment);
};

export default VueGitComment;
