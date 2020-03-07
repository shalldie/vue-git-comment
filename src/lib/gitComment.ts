import store, { StateStore } from './store';
import { getQuery, reversePageMatch, addTargetBlank, dateFormat } from './utils';
import { GIT_COMMENT_ACCESS_STOKEN, ISSUE_LABELS, ISSUE_BODY } from './constants';
import * as github from './github';
import Deferred from './Deferred';

class GitComment {
    public init(options: StateStore['options']): void {
        // 初始化配置
        store.reset();
        store.extend({ options });

        // 不用 await 是为了减小打包体积

        // 1. 如果是auth回来，获取并处理token
        this.tryHandleBack().then(() => {
            // 2. 尝试从 localStorage 中拿到token保存
            this.tryHandleToken();
            // 3. 尝试获取当前登陆的用户信息
            this.getUserInfo();
            // 4. 获取组件所需的信息
            this.getIssueInfo()
                .then(() => this.getCurrentPage())
                .catch(ex => {
                    console.log(ex);
                });
        });
    }

    /**
     * 如果从auth验证跳转回来，生成并处理token
     *
     * @private
     * @returns {Promise<void>}
     * @memberof GitComment
     */
    private tryHandleBack(): Promise<void> {
        // 校验是否是从github跳转过来

        const state = getQuery('state');
        const code = getQuery('code');
        if (!code || !state) {
            return Promise.resolve();
        }

        window.history.replaceState(null, '', decodeURIComponent(state));

        store.comments.loading = true;
        return github
            .getToken(code)
            .then(token => {
                store.access_token = token;
                localStorage.setItem(GIT_COMMENT_ACCESS_STOKEN, token);
            })
            .catch(ex => {
                console.log(ex);
                this.logOut();
            })
            .finally(() => {
                store.comments.loading = false;
            });
    }

    /**
     * 从 localstorage 中更新token
     *
     * @private
     * @returns {void}
     * @memberof GitComment
     */
    private tryHandleToken(): void {
        const token = localStorage.getItem(GIT_COMMENT_ACCESS_STOKEN); // webStorage 里面存储的token
        if (!token) {
            return;
        }

        store.access_token = token;
    }

    /**
     * 获取当前用户信息（仅当前有token时）
     *
     * @private
     * @returns
     * @memberof GitComment
     */
    private getUserInfo() {
        if (!store.access_token) {
            return;
        }
        store.userInfo.loading = true;
        return github
            .getAuthUser()
            .then(body => {
                store.state.ifLogin = true;
                store.userInfo = {
                    loading: false,
                    name: body.login,
                    avatar_url: body.avatar_url,
                    html_url: body.html_url
                };
            })
            .catch(err => {
                // token失效，未登录状态
                console.log(err);
                this.logOut();
            })
            .finally(() => {
                store.state.loading = false;
            });
    }

    /**
     * 获取 issue 相关信息
     *
     * @private
     * @returns
     * @memberof GitComment
     */
    private getIssueInfo() {
        return github.getFirstIssue().then(result => {
            // 没有初始化issue
            if (!result) {
                store.issue.created = false;
                throw new Error('issue uninited');
                return;
            }
            store.comments.count = result.comments;
            store.issue = {
                ...store.issue,
                created: true,
                number: result.number,
                html_url: result.html_url
            };

            this.getIssueReactions();
        });
    }

    /**
     * 获取当前所用 issue 的 reactions
     *
     * @private
     * @memberof GitComment
     */
    private getIssueReactions() {
        github.issueReactions().then(list => {
            list = list
                .filter(n => n.content === 'heart')
                .map(n => ({
                    id: n.id,
                    name: n.user.login
                }));
            store.issue.likedList = list;
        });
    }

    /**
     * 获取当前页的所有评论
     *
     * @param {boolean} [issueRefresh=false] 是否需要更新issue
     * @memberof GitComment
     */
    public getCurrentPage(issueRefresh = false) {
        store.comments.loading = true;
        const dfd = new Deferred<{ page: number; per_page: number; offset: number }>();
        const {
            comments: { page, per_page }
        } = store;

        // 如果按时间 asc 排序，则直接查询
        if (store.comments.sortedAsc) {
            const pro = issueRefresh ? this.getIssueInfo() : Promise.resolve();
            pro.then(() => {
                dfd.resolve({ page, per_page, offset: 0 });
            });
        }
        // 如果按时间 desc 排序，先查一次总数量，然后得到【倒序page、per_page、offset】
        else {
            this.getIssueInfo().then(() => {
                const count = store.comments.count;
                const match = reversePageMatch(page, per_page, count);
                dfd.resolve(match);
            });
        }

        dfd.then(match => {
            // 先通过偏移量得到数据
            return github.getComments(match.page, match.per_page).then(list => {
                list = list.slice(match.offset, match.offset + per_page);
                !store.comments.sortedAsc && list.reverse(); // 如果倒序查询，需要reverse一哈
                return list;
            });
        }).then((result: any[]) => {
            // 再把最终的结果存储
            const list = result.map<StateStore['comments']['list'][number]>(item => ({
                id: item.id,
                body_html: addTargetBlank(item.body_html),
                body: item.body,
                created_at: dateFormat(new Date(item.created_at), 'yyyy/MM/dd HH:mm:ss'),
                heart: item.reactions.heart,
                likedList: Array(item.reactions.heart),
                user: {
                    name: item.user.login,
                    avatar_url: item.user.avatar_url,
                    link: item.user.html_url
                }
            }));
            // 有 heart 的时候，去获取具体信息
            if (store.state.ifLogin) {
                list.forEach(item => {
                    if (!item.likedList.length) {
                        return;
                    }
                    this.getCommentReactions(item.id + '').then(likedList => {
                        item.likedList = likedList;
                        store.comments.list = store.comments.list.slice();
                    });
                });
            }
            store.comments.loading = false;
            store.comments.list = list;
        });
    }

    /**
     * 获取某个评论的点赞信息
     *
     * @private
     * @param {string} commentId
     * @returns {Promise<{ id: string; name: string }[]>}
     * @memberof GitComment
     */
    private getCommentReactions(commentId: string): Promise<{ id: string; name: string }[]> {
        return github.commentReactions(commentId).then(list => {
            list = list
                .filter(n => n.content == 'heart')
                .map(n => ({
                    id: n.id,
                    name: n.user.login
                }));
            return list;
        });
    }

    /**
     * 登陆
     *
     * @memberof GitComment
     */
    public login() {
        github.toAuthorize();
    }

    /**
     * 退出
     *
     * @memberof GitComment
     */
    public logOut() {
        store.extend({
            access_token: '',
            state: {
                loading: false,
                ifLogin: false
            },
            userInfo: {
                loading: false,
                name: '',
                avatar_url: '',
                html_url: ''
            }
        });
        window.localStorage.removeItem(GIT_COMMENT_ACCESS_STOKEN);
    }

    /**
     * 创建一个 issue，用来储存当前文章的评论
     *
     * @returns
     * @memberof GitComment
     */
    public createIssue() {
        return github.createIssue(
            [store.options.uuid, ...ISSUE_LABELS],
            store.options.title || document.title.substr(0, 20),
            ISSUE_BODY
        );
    }
}

export default new GitComment();
