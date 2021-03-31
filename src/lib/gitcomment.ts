import { StateStore, store } from './store';
import { getQuery, reversePageMatch, addTargetBlank, dateFormat } from './utils';
import * as github from '~/lib/github';
import { GIT_COMMENT_ACCESS_STOKEN, ISSUE_BODY, ISSUE_LABELS } from './constants';

class GitComment {
    public async init(options: StateStore['state']['options']) {
        // 初始化配置
        store.reset();
        store.extend({
            options: {
                ...store.state.options,
                ...options
            }
        });

        // 1. 如果是从 auth 回来，获取并处理 token
        await this.tryHandleBack();
        // 2. 尝试从 localStorage 中拿到token保存
        this.tryHandleToken();

        // 接下来 token 不确定存在

        // 3. 尝试获取当前登陆的用户信息，不用 await
        this.getUserInfo();
        // 4. 获取组件所需的信息
        await this.getIssueInfo();
        await this.fetchCurrentPage();
    }

    /**
     * 如果从auth验证跳转回来，生成并处理token
     *
     * @private
     * @memberof GitComment
     */
    private async tryHandleBack() {
        // 校验是否是从github跳转过来

        const state = getQuery('state');
        const code = getQuery('code');
        if (!code || !state) {
            return Promise.resolve();
        }

        // state 是去验证前的页面地址，直接 replace
        window.history.replaceState(null, '', decodeURIComponent(state));

        store.state.comments.loading = true;

        try {
            const token = await github.getToken(code);
            store.state.accessToken = token;
            localStorage.setItem(GIT_COMMENT_ACCESS_STOKEN, token);
        } catch (ex) {
            console.log(ex);
            this.logOut();
        } finally {
            store.state.comments.loading = false;
        }
    }

    /**
     * localstorage 中更新token
     *
     * @private
     * @return {*}
     * @memberof GitComment
     */
    private tryHandleToken() {
        const token = localStorage.getItem(GIT_COMMENT_ACCESS_STOKEN); // webStorage 里面存储的token
        if (!token) {
            return;
        }

        store.state.accessToken = token;
    }

    private async getUserInfo() {
        const state = store.state;

        if (!state.accessToken) {
            return;
        }

        state.loading = true;

        try {
            const body = await github.getAuthUser();
            state.ifLogin = true;
            state.userInfo = {
                loading: false,
                name: body.login,
                avatarUrl: body.avatar_url,
                htmlUrl: body.html_url
            };
        } catch (err) {
            console.log(err);
            this.logOut();
        } finally {
            state.loading = false;
        }
    }

    /**
     * 获取 issue 相关信息
     *
     * @private
     * @return {*}
     * @memberof GitComment
     */
    private async getIssueInfo() {
        const state = store.state;

        const issue = await github.getFirstIssue();

        // 没有初始化issue
        if (!issue) {
            state.issue.created = false;
            throw new Error('issue uninited');
        }
        state.comments.count = issue.comments;
        state.issue = {
            ...state.issue,
            created: true,
            number: issue.number,
            htmlUrl: issue.htmlUrl
        };

        this.getIssueReactions();
    }

    /**
     * 获取当前所用 issue 的 reactions
     *
     * @private
     * @memberof GitComment
     */
    private async getIssueReactions() {
        const list = await github.issueReactions();

        store.state.issue.likedList = list
            .filter(n => n.content === 'heart')
            .map(n => ({
                id: n.id,
                name: n.user.login
            }));
    }

    /**
     * 获取某个评论的点赞信息
     *
     * @private
     * @param {string} commentId
     * @return {*}  {Promise<{ id: string; name: string }[]>}
     * @memberof GitComment
     */
    private async getCommentReactions(commentId: string): Promise<{ id: string; name: string }[]> {
        const list = await github.commentReactions(commentId);

        return list
            .filter(n => n.content == 'heart')
            .map(n => ({
                id: n.id,
                name: n.user.login
            }));
    }

    public logIn() {
        github.toAuthorize();
    }

    public logOut() {
        store.extend({
            accessToken: '',
            loading: false,
            ifLogin: false,
            userInfo: {
                loading: false,
                name: '',
                avatarUrl: '',
                htmlUrl: ''
            }
        });
        localStorage.removeItem(GIT_COMMENT_ACCESS_STOKEN);
    }

    /**
     * 创建一个 issue，用来储存当前文章的评论
     *
     * @return {*}
     * @memberof GitComment
     */
    public createIssue() {
        const state = store.state;

        return github.createIssue(
            [state.options.uuid, ...ISSUE_LABELS],
            state.options.title || document.title.substr(0, 20),
            ISSUE_BODY
        );
    }

    public async fetchCurrentPage(issueRefresh = false) {
        const state = store.state;
        state.comments.loading = true;

        const { page, perPage } = state.comments;

        const match: { page: number; perPage: number; offset: number } = await new Promise(async resolve => {
            // 如果按时间 asc 排序，则直接查询
            if (state.comments.sortedAsc) {
                if (issueRefresh) {
                    await this.getIssueInfo();
                }
                resolve({ page, perPage, offset: 0 });
                return;
            }

            // 如果按时间 desc 排序，先查一次总数量，然后得到【倒序page、perPage、offset】
            await this.getIssueInfo();
            const count = state.comments.count;
            const match = reversePageMatch(page, perPage, count);
            resolve(match);
        });

        github
            // 先通过偏移量得到数据
            .getComments(match.page, match.perPage)
            .then(list => {
                list = list.slice(match.offset, match.offset + perPage);
                !state.comments.sortedAsc && list.reverse(); // 如果倒序查询，需要reverse一哈
                return list;
            })
            // 再把最终的结果存储
            .then((result: any[]) => {
                // 再把最终的结果存储
                const list = result.map<StateStore['state']['comments']['list'][number]>(item => ({
                    id: item.id,
                    bodyHtml: addTargetBlank(item.body_html),
                    body: item.body,
                    createdAt: dateFormat(new Date(item.created_at), 'yyyy/MM/dd HH:mm:ss'),
                    heart: item.reactions.heart,
                    likedList: Array(item.reactions.heart),
                    user: {
                        name: item.user.login,
                        avatarUrl: item.user.avatar_url,
                        link: item.user.html_url
                    }
                }));
                // 有 heart 的时候，去获取具体信息
                if (state.ifLogin) {
                    list.forEach(item => {
                        if (!item.likedList.length) {
                            return;
                        }
                        this.getCommentReactions(item.id + '').then(likedList => {
                            item.likedList = likedList;
                            state.comments.list = state.comments.list.slice();
                        });
                    });
                }
                state.comments.loading = false;
                state.comments.list = list;
            });
    }
}

export const gm = new GitComment();
