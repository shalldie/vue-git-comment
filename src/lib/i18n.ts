import store from './store';

const languages = {
    // comment header
    Liked: {
        'zh-CN': '喜欢'
    },
    Comments: {
        'zh-CN': '评论'
    },
    Latest: {
        'zh-CN': '最新'
    },
    Earliest: {
        'zh-CN': '最早'
    },
    // comment body
    'Seems new,': {
        'zh-CN': '似乎是新建的，'
    },
    Click: {
        'zh-CN': '点击'
    },
    'to create an issue.': {
        'zh-CN': '去创建一个新 issue 。'
    },
    'commented on': {
        'zh-CN': '发表于'
    },
    // comment pagination
    'Next page': {
        'zh-CN': '下一页'
    },
    // comment editor
    Write: {
        'zh-CN': '评论'
    },
    Preview: {
        'zh-CN': '预览'
    },
    Login: {
        'zh-CN': '登陆'
    },
    'with Github': {
        'zh-CN': '，使用 Github'
    },
    Logout: {
        'zh-CN': '退出'
    },
    'Leave a comment.': {
        'zh-CN': '留下一个评论。'
    },
    'Nothing to preview': {
        'zh-CN': '没有内容可以预览'
    },
    'Loading preview ...': {
        'zh-CN': '加载预览中 ...'
    },
    Comment: {
        'zh-CN': '发表评论'
    },
    Submitting: {
        'zh-CN': '提交中'
    }
};

export default function(key: string, map = languages) {
    const lang = store.options.language;
    const item = map[key];

    if (item[lang]) {
        return item[lang];
    }
    return key;
}
