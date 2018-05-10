/**
 * 当前状态和全局数据
 */
export default {

    /**
     * @type {HTMLElement}
     */
    el: null,

    client_id: '',

    client_secret: '',

    access_token: '',

    owner: '',

    repo: '',

    key: '',

    /**
     * 是否登录
     */
    ifLogin: false,

    userInfo: {
        avatar_url: ''
    },

    update(sender) {
        for (let key in sender) {
            if (sender.hasOwnProperty(key)) {
                this[key] = sender[key];
            }
        }
    }
};
