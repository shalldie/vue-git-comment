import { appendQuery, getQuery } from "./lib/utils";
import http from "./lib/http";

const STORAGE_TOKEN_KEY = 'STORAGE_TOKEN_KEY';

class GitComment {
    /**
     * 配置初始化信息
     * @param {{client_id:string,client_secret:string}} options
     * @memberof GitComment
     */
    config(options) {
        const { client_id, client_secret } = options;
        this.client_id = client_id;
        this.client_secret = client_secret;
        this.init();
    }

    //#region fields

    client_id = ''

    client_secret = ''

    access_token = ''

    /**
     * 是否登陆
     *
     * @memberof GitHub
     */
    ifLogin = false

    //#endregion

    //#region private methods

    /**
     * 初始化
     *
     * @memberof GitComment
     */
    init() {
        this._updateToken(localStorage.getItem(STORAGE_TOKEN_KEY));
        if (!this.ifLogin) {
            // 如果重定向回来，就去获取token并存下来
            this._checkBack();
        }
    }

    /**
     * 检查是否是重定向回来
     *
     * @memberof GitComment
     */
    _checkBack() {
        if (~window.location.search.indexOf('code')) {
            let code = getQuery(window.location.search, 'code');
            this._getToken(code);
        }
    }

    /**
     * 获取token
     *
     * @param {string} code
     * @memberof GitComment
     */
    _getToken(code) {
        http.post('https://github.com/login/oauth/access_token', {
            client_id: this.client_id,
            client_secret: this.client_secret,
            code
        }, true)
            .then(body => {
                let token = getQuery(body, 'access_token');
                this._updateToken(token);
                let replaceUrl = getQuery(window.location.search, 'state');
                replaceUrl = decodeURIComponent(replaceUrl);
                window.history.replaceState(null, null, replaceUrl);
            })
            .catch(err => console.log(err));
    }

    /**
     * 更新token和状态
     *
     * @param {string} token
     * @memberof GitComment
     */
    _updateToken(token) {
        if (token && token.length) {
            this.ifLogin = true;
            this.access_token = token;
        }
        else {
            this.ifLogin = false;
            this.access_token = '';
        }
        window.localStorage.setItem(STORAGE_TOKEN_KEY, this.access_token);
    }

    //#endregion

    //#region public methods

    /**
     * 去github获取权限
     *
     * @memberof GitHub
     */
    login() {
        let url = 'https://github.com/login/oauth/authorize';
        url = appendQuery(url, {
            client_id: this.client_id,
            redirect_uri: window.location.href,
            scope: 'public_repo',
            state: window.location.href
        });
        window.location.href = url;
    }

    //#endregion
}

export default new GitComment();
