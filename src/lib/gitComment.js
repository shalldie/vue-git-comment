import store from './store';
import { appendQuery, getQuery } from "./utils";
import * as github from './github';
import * as _ from './utils';
import { GIT_COMMENT_ACCESS_STOKEN, ISSUE_LABELS, ISSUE_BODY } from './constants';

class GitComment {
    /**
     * 配置初始化信息
     * @param {{client_id:string,client_secret:string}} options
     * @memberof GitComment
     */
    config(options) {
        // const { client_id, client_secret } = options;
        store.reset();
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

        if (this._backStep()) {
            return;
        }

        if (this._tokenStep()) {
            return;
        }

        this._normalStep();
    }

    /**
     * 重定向后回来的步骤
     */
    _backStep() {
        let code = this._checkBack();
        if (!code) {
            return false;
        }
        console.log('backstep');

        // 在获取token后，加载数据，获取用户信息
        this._getToken(code)
            .then(() => {
                this.getUserInfo();
                return this._getIssueInfo();
            })
            .then(() => this.getCurrentPage())
            .catch(err => console.log(err));
        return true;
    }

    _tokenStep() {
        let token = localStorage.getItem(GIT_COMMENT_ACCESS_STOKEN); // webStorage 里面存储的token
        if (!token) {
            return false;
        }
        console.log('tokenstep');
        store.access_token = token;

        // 如果存在历史token，先验证，再加载数据
        this.getUserInfo();
        Promise.resolve().then(() => this._getIssueInfo())
            .then(() => this.getCurrentPage())
            .catch(err => console.log(err));
        return true;
    }

    _normalStep() {
        console.log('normalstep');
        this._getIssueInfo()
            .then(() => this.getCurrentPage())
            .catch(err => console.log(err));
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
            // this._getToken(code);
            return code;
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
        store.userInfo.loading = true;
        return github
            .getToken(code)
            .then(token => {
                store.access_token = token;
                localStorage.setItem(GIT_COMMENT_ACCESS_STOKEN, token);
                window.history.replaceState(null, null, replaceUrl);
            });
    }

    _getIssueInfo() {
        return github
            .getFirstIssue([store.key, ...ISSUE_LABELS].join(','))
            .then(result => {
                // 没有初始化issue
                if (!result) {
                    store.issue.created = false;
                    throw new Error('issue uninited');
                    return;
                }
                store.issue.created = true;
                store.comments.count = result.comments;
                store.issue.number = result.number;
                // store.issue.likedCount = result.reactions.heart;

                store.issue.likedList = Array(result.reactions.heart);
                this._getIssueReactions();
            });
    }

    _getIssueReactions() {
        github.issueReactions()
            .then(list => {
                list = list.filter(n => n.content === 'heart')
                    .map(n => ({
                        id: n.id,
                        name: n.user.login
                    }));
                store.issue.likedList = list;
            });
    }

    _getCommentReactions(commentId) {
        return github.commentReactions(commentId)
            .then(list => {
                list = list.filter(n => n.content == 'heart')
                    .map(n => ({
                        id: n.id,
                        name: n.user.login
                    }))
                return list;
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
            access_token: '',
            userInfo: {
                loading: false,
                name: '',
                avatar_url: ''
            }
        });
        window.localStorage.removeItem(GIT_COMMENT_ACCESS_STOKEN);
    }

    getUserInfo() {
        // store.userInfo.loading = true;
        return github.getAuthUser().then(body => {
            store.ifLogin = true;
            store.userInfo = {
                loading: false,
                name: body.login,
                avatar_url: body.avatar_url
            };
        }).catch(err => {  // token失效，未登录状态
            console.log(err);
            this.logOut();
        });
    }

    getCurrentPage() {
        store.comments.loading = true;
        return github.getComments()
            .then(list => {
                list = list.map((item, index) => {

                    return {
                        id: item.id,
                        body: _.addTargetBlank(item.body_html),
                        created_at: _.dateFormat(new Date(item.created_at), 'yyyy/MM/dd HH:mm:ss'),
                        heart: item.reactions.heart,
                        hasHeart: false,
                        likedList: Array(item.reactions.heart),
                        user: {
                            name: item.user.login,
                            avatar_url: item.user.avatar_url,
                            link: item.user.html_url
                        }
                    };
                });
                // 有 heart 的时候，去获取具体信息
                list.forEach(item => {
                    if (!item.likedList.length) {
                        return;
                    }
                    this._getCommentReactions(item.id)
                        .then(likedList => {
                            item.likedList = likedList;
                            store.comments.list = store.comments.list.slice();
                        });
                });
                store.comments.loading = false;
                store.comments.list = list;
            });
    }

    createIssue() {
        return github.createIssue(
            [store.key, ...ISSUE_LABELS],
            store.title || document.title.substr(0, 20),
            ISSUE_BODY
        );
    }

    /**
     * 创建一个comment
     *
     * @param {string} body
     * @returns
     * @memberof GitComment
     */
    createComment(body) {
        return github.createComment(body);
    }

    createIssueHeart() {

    }

    createCommentHeart() {

    }

    //#endregion
}

export default new GitComment();
