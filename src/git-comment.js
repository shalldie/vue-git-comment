import state from './state';
import { appendQuery, getQuery } from "./lib/utils";
import * as github from './lib/github';

const STORAGE_TOKEN_KEY = 'STORAGE_TOKEN_KEY';

class GitComment {
    /**
     * 配置初始化信息
     * @param {{client_id:string,client_secret:string}} options
     * @memberof GitComment
     */
    config(options) {
        const { client_id, client_secret } = options;
        state.client_id = client_id;
        state.client_secret = client_secret;
        this.init();
    }

    //#region fields

    state = state
    
    //#endregion

    //#region private methods

    /**
     * 初始化
     *
     * @memberof GitComment
     */
    init() {
        this._updateToken(localStorage.getItem(STORAGE_TOKEN_KEY));
        // 如果重定向回来，就去获取token并存下来
        this._checkBack();
    }

    /**
     * 检查是否是重定向回来
     *
     * @memberof GitComment
     */
    _checkBack() {
        const search = window.location.search;
        // 如果是跳转回来的页面，即包含 code 和 state
        if (/(?=\S*code=\S*)(?=\S*state=\S*)/.test(search)) {
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
        let replaceUrl = getQuery(window.location.search, 'state');
        replaceUrl = decodeURIComponent(replaceUrl);

        github.getToken(state.client_id, state.client_secret, code)
            .then(token => {
                this._updateToken(token);
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
            state.ifLogin = true;
            state.access_token = token;
        }
        else {
            state.ifLogin = false;
            state.access_token = '';
        }
        window.localStorage.setItem(STORAGE_TOKEN_KEY, state.access_token);
    }

    //#endregion

    //#region public methods

    /**
     * 去github获取权限
     *
     * @memberof GitHub
     */
    login() {
        github.toAuthorize(state.client_id);
    }

    getUserInfo() {
        github.getAuthUser().then(body => console.log(body));
    }

    //#endregion
}

export default new GitComment();
