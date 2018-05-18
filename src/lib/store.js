/**
 * 当前状态和全局数据
 */
const store = {

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

    /**
     * 登陆用户信息
     */
    userInfo: {
        loading: false,
        name: '',
        avatar_url: ''
    },

    issue: {
        /**
         * 是否已经创建
         */
        created: true,
        /**
         * issue 的number
         */
        number: 0,

        /**
         * `喜欢` 的数量
         */
        likedCount: 0
    },

    comments: {
        /**
         * 正在加载
         */
        loading: false,

        /**
         * 评论的数量
         */
        count: 0,

        page: 1,

        per_page: 20,

        /**
         * true-由旧到新 false-由新到旧
         */
        sortedAsc: false,

        /**
         * 当前页的评论
         */
        list: []
    },

    update(sender) {
        for (let key in sender) {
            if (sender.hasOwnProperty(key)) {
                this[key] = sender[key];
            }
        }
    },

    reset() {
        Object.assign(store, baseStore);
    }
};

const baseStore = Object.assign({}, store);

export default store;
