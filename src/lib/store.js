/**
 * 当前状态和全局数据
 */
export default {

    //#region auth

    client_id: '',

    client_secret: '',

    access_token: '',

    owner: '',

    repo: '',

    key: '',

    //#endregion

    /**
     * 正在初始化
     */
    loading: true,

    /**
     * 是否登录
     */
    ifLogin: false,

    userInfo: {
        name: '',
        avatar_url: ''
    },

    /**
     * 喜欢的数量
     */
    likedNum: 32,

    /**
     * 评论数量
     */
    commentsNum: 23,

    /**
     * 评论列表
     */
    commentList: [],

    /**
     * true-由旧到新 false-由新到旧
     */
    sortedAsc: false,

    update(sender) {
        for (let key in sender) {
            if (sender.hasOwnProperty(key)) {
                this[key] = sender[key];
            }
        }
    }
};
