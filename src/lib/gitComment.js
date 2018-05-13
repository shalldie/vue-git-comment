import store from './store';
import { appendQuery, getQuery } from "./lib/utils";
import * as github from './lib/github';

/**
 * https://github.com/shalldie/git-comment
 *
 * @license MIT License
 * @description 一个基于 issue 的评论插件。
 * @author shalldie
 */

const GIT_COMMENT_ACCESS_STOKEN = 'GIT_COMMENT_ACCESS_STOKEN';

class GitComment {
    /**
     * 配置初始化信息
     * @param {{client_id:string,client_secret:string}} options
     * @memberof GitComment
     */
    config(options) {
        // const { client_id, client_secret } = options;
        Object.assign(store, options);
        this.init();
    }

    //#region private methods

    /**
     * 初始化
     *
     * @memberof GitComment
     */
    init() {
        this._updateToken(localStorage.getItem(GIT_COMMENT_ACCESS_STOKEN));
        // 如果重定向回来，就去获取token并存下来
        this._checkBack();

        this._getIssueInfo();
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

        github.getToken(store.client_id, store.client_secret, code)
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
            store.update({
                ifLogin: true,
                access_token: token
            });
        }
        else {
            store.update({
                ifLogin: false,
                access_token: ''
            });
        }
        window.localStorage.setItem(GIT_COMMENT_ACCESS_STOKEN, store.access_token);
    }

    _getIssueInfo() {
        github.getFirstIssue(store.owner, store.repo, store.key)
            .then(result => {
                console.log(result);
            });
    }

    //#endregion

    //#region public methods

    /**
     * 去github获取权限
     *
     * @memberof GitHub
     */
    login() {
        github.toAuthorize(store.client_id);
    }

    /**
     * 退出
     *
     * @memberof GitComment
     */
    logOut() {
        store.update({
            ifLogin: false,
            access_token: ''
        });
        window.localStorage.removeItem(GIT_COMMENT_ACCESS_STOKEN);
    }

    getUserInfo() {
        github.getAuthUser().then(body => console.log(body))
            .catch(err => {  // token失效，未登录状态
                console.log(err);
                this.logOut();
            });
    }

    //#endregion
}

export default new GitComment();
