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
     * 是否登录
     */
    ifLogin: false,

    userInfo: {
        avatar_url: ''
    },

    /**
     * 喜欢的数量
     */
    likedNum: 32,

    commentsNum: 23,

    update(sender) {
        for (let key in sender) {
            if (sender.hasOwnProperty(key)) {
                this[key] = sender[key];
            }
        }
    }
};
