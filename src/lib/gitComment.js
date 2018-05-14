import store from './store';
import { appendQuery, getQuery } from "./utils";
import * as github from './github';

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

        // 如果重定向回来，就去获取token并存下来
        let ifBack = this._checkBack();
        if (ifBack) {
            return;
        }

        let token = localStorage.getItem(GIT_COMMENT_ACCESS_STOKEN); // webStorage 里面存储的token
        if (token) {  // 有token就去校验并拉取数据
            store.access_token = token;
            this.getUserInfo();
        }

        // this._getIssueInfo();
    }

    /**
     * 检查是否是重定向回来
     *
     * @memberof GitComment
     * @returns {boolean}
     */
    _checkBack() {
        const search = window.location.search;
        // 如果是跳转回来的页面，即包含 code 和 state
        if (/(?=\S*code=\S*)(?=\S*state=\S*)/.test(search)) {
            let code = getQuery(window.location.search, 'code');
            this._getToken(code);
            return true;
        }
        return false;
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
                store.access_token = token;
                localStorage.setItem(GIT_COMMENT_ACCESS_STOKEN, token);
                window.history.replaceState(null, null, replaceUrl);
            })
            .then(() => this.getUserInfo())
            .catch(err => console.log(err));
    }

    _getIssueInfo() {
        github.getFirstIssue(store.owner, store.repo, store.key)
            .then(result => {
                // console.log(result);
                store.commentsNum = result.comments;
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
        github.getAuthUser().then(body => {
            store.ifLogin = true;
            store.userInfo.name = body.login;
            store.userInfo.avatar_url = body.avatar_url;
        }).catch(err => {  // token失效，未登录状态
            console.log(err);
            this.logOut();
        });
    }

    //#endregion
}

export default new GitComment();
