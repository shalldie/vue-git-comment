import { appendQuery } from './utils';
import { store } from '~/lib/store';
import { http } from './http';
import { ISSUE_LABELS } from './constants';

// Media Types
// https://docs.github.com/en/rest/overview/media-types

/**
 * 组件的通用凭证
 *
 * @returns
 */
function basicAuthHeader() {
    const { clientID, clientSecret } = store.state.options;
    return {
        Authorization: 'Basic ' + btoa(`${clientID}:${clientSecret}`)
    };
}

/**
 * 登陆后用户的凭证
 *
 * @returns
 */
function tokenAuthHeader() {
    return {
        Authorization: `token ${store.state.accessToken}`
    };
}

// #region auth 相关

/**
 * 跳转去认证
 *
 * @export
 */
export function toAuthorize(): void {
    let url = 'https://github.com/login/oauth/authorize';
    url = appendQuery(url, {
        client_id: store.state.options.clientID,
        redirect_uri: window.location.href,
        scope: 'public_repo',
        state: window.location.href
    });
    window.location.href = url;
}

/**
 * 获取token
 *
 * @export
 * @param {string} code
 * @returns {Promise<string>}
 */
export function getToken(code: string): Promise<string> {
    const { clientID, clientSecret, proxy } = store.state.options;

    // https://github.com/login/oauth/access_token

    return http
        .fetch({
            method: 'POST',
            url: proxy!,
            params: {
                client_id: clientID,
                client_secret: clientSecret,
                code
            }
        })
        .then(body => body.access_token);
}

/**
 * 获取当前用户信息
 * https://docs.github.com/en/rest/reference/users#get-the-authenticated-user
 *
 * @export
 * @returns
 */
export function getAuthUser() {
    return http.fetch({
        method: 'GET',
        url: '/user',
        headers: {
            ...tokenAuthHeader(),
            Accept: 'application/vnd.github.v3+json'
        },
        query: {
            _: Math.random()
        }
    });
}

// #endregion

// #region issue 相关

/**
 * 创建一个 issue
 * https://docs.github.com/en/rest/reference/issues#create-an-issue
 *
 * @export
 * @param {string[]} labels
 * @param {string} title
 * @param {string} body
 * @returns
 */
export function createIssue(labels: string[], title: string, body: string) {
    const { owner, repo } = store.state.options;
    return http.fetch({
        method: 'POST',
        url: `/repos/${owner}/${repo}/issues`,
        headers: tokenAuthHeader(),
        params: { labels, title, body }
    });
}

/**
 * todo: check
 * 获取第一个 issue 相关信息
 * https://docs.github.com/en/rest/reference/issues#list-repository-issues
 *
 * @export
 * @returns {Promise<{ comments: number; number: number; htmlUrl: string }>}
 */
export function getFirstIssue(): Promise<{ comments: number; number: number; htmlUrl: string }> {
    const { owner, repo, uuid } = store.state.options;
    const labels = [uuid, ...ISSUE_LABELS].join(',');

    return http
        .fetch<{ comments: number; number: number; html_url: string }[]>({
            method: 'GET',
            url: `/repos/${owner}/${repo}/issues`,
            headers: {
                ...basicAuthHeader(),
                Accept: 'application/vnd.github.v3+json'
            },
            query: {
                creator: owner,
                labels,
                _: Math.random()
            }
        })
        .then(list =>
            list.map(n => ({
                ...n,
                htmlUrl: n.html_url
            }))
        )
        .then(list => list[0]);
}

/**
 * 获取 issue 对应的 reactions
 * https://docs.github.com/en/rest/reference/reactions#list-reactions-for-an-issue
 *
 * @export
 * @returns
 */
export function issueReactions() {
    const { owner, repo } = store.state.options;
    const number = store.state.issue.number;
    return http.fetch({
        method: 'GET',
        url: `/repos/${owner}/${repo}/issues/${number}/reactions`,
        headers: {
            ...basicAuthHeader(),
            Accept: 'application/vnd.github.squirrel-girl-preview+json'
        },
        query: {
            _: Math.random()
        }
    });
}

// #endregion

// #region comment 相关

/**
 * 创建评论
 * https://docs.github.com/en/rest/reference/issues#create-an-issue-comment
 *
 * @export
 * @param {string} body
 */
export function createComment(body: string) {
    const { owner, repo } = store.state.options;
    const number = store.state.issue.number;

    return http.fetch({
        method: 'POST',
        url: `/repos/${owner}/${repo}/issues/${number}/comments`,
        headers: tokenAuthHeader(),
        params: {
            body
        }
    });
}

/**
 * 获取 markdown 对应的html片段
 * https://docs.github.com/en/rest/reference/markdown#render-a-markdown-document
 *
 * @export
 * @param {string} content
 * @returns
 */
export function getMarkDown(content: string): Promise<string> {
    return http.fetch({
        method: 'POST',
        url: '/markdown',
        headers: basicAuthHeader(),
        params: {
            mode: 'gfm', // 默认是 'markdown'，gfm 可能会处理上下文
            text: content
        }
    });
}

/**
 * todo: 看下 下面两个 accept
 * 根据 page, per_page 获取某一页的评论
 * https://docs.github.com/en/rest/reference/issues#list-issue-comments
 *
 * @export
 * @param {number} [page]
 * @param {number} [perPage]
 * @returns
 */
export function getComments(page?: number, perPage?: number) {
    const { owner, repo } = store.state.options;
    const number = store.state.issue.number;

    return http.fetch({
        method: 'GET',
        url: `/repos/${owner}/${repo}/issues/${number}/comments`,
        headers: {
            ...basicAuthHeader(),
            Accept: [
                // 返回的 comment 带 reactions
                'application/vnd.github.squirrel-girl-preview',
                // body 的原始markdown，以及渲染的html。 全都要
                // https://developer.github.com/v3/issues/comments/#custom-media-types
                'application/vnd.github.v3.raw+json',
                'application/vnd.github.VERSION.html+json'
            ].join(',')
        },
        query: {
            page: page || store.state.comments.page,
            per_page: perPage || store.state.comments.perPage,
            _: Math.random()
        }
    });
}

/**
 * 获取某 comment 的点赞信息
 * https://docs.github.com/en/rest/reference/reactions#list-reactions-for-an-issue-comment
 *
 * @export
 * @param {string} commentId
 * @returns {Promise<any>}
 */
export function commentReactions(commentId: string): Promise<any> {
    const { owner, repo } = store.state.options;
    return http.fetch({
        method: 'GET',
        url: `/repos/${owner}/${repo}/issues/comments/${commentId}/reactions?_=${Math.random()}`,
        headers: {
            ...basicAuthHeader(),
            Accept: 'application/vnd.github.squirrel-girl-preview+json'
        }
    });
}

// #endregion

// #region 点赞相关

/**
 * 给 issue 点赞
 * https://docs.github.com/en/rest/reference/reactions#create-reaction-for-an-issue
 *
 * @export
 * @returns
 */
export function heartIssue() {
    const { owner, repo } = store.state.options;
    const number = store.state.issue.number;

    return http.fetch({
        method: 'POST',
        url: `/repos/${owner}/${repo}/issues/${number}/reactions`,
        headers: {
            ...tokenAuthHeader(),
            Accept: 'application/vnd.github.squirrel-girl-preview+json'
        },
        params: {
            content: 'heart'
        }
    });
}

/**
 * todo: 替换为新 api
 * 取消issue的赞
 * https://docs.github.com/en/rest/reference/reactions#delete-a-reaction-legacy
 * https://developer.github.com/changes/2020-02-26-new-delete-reactions-endpoints/
 *
 * @export
 * @param {string} id heart的id
 * @returns
 */
export function deleteIssueHeart(heartId: string) {
    return http.fetch({
        method: 'DELETE',
        url: `/reactions/${heartId}`,
        headers: {
            ...tokenAuthHeader(),
            Accept: 'application/vnd.github.squirrel-girl-preview+json'
        }
    });
}

/**
 * 给 comment 点赞
 * https://docs.github.com/en/rest/reference/reactions#create-reaction-for-an-issue-comment
 *
 * @export
 * @param {string} commentId
 * @returns
 */
export function heartComment(commentId: string) {
    const { owner, repo } = store.state.options;

    return http.fetch({
        method: 'POST',
        url: `/repos/${owner}/${repo}/issues/comments/${commentId}/reactions`,
        params: {
            content: 'heart'
        },
        headers: {
            ...tokenAuthHeader(),
            Accept: 'application/vnd.github.squirrel-girl-preview+json'
        }
    });
}

/**
 * todo: 使用新 api
 * 取消 comment 的赞
 * https://docs.github.com/en/rest/reference/reactions#delete-an-issue-comment-reaction
 *
 * @export
 * @param {*} heartId
 * @returns
 */
export function deleteCommentHeart(heartId: string) {
    return deleteIssueHeart(heartId);
}

//#endregion
