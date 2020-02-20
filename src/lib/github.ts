import { appendQuery } from './utils';
import store from './store';
import http from './http';
import { IDENTITY_STATE, ISSUE_LABELS } from './constants';

/**
 * 组件的通用凭证
 *
 * @returns
 */
function basicAuthHeader() {
    const { client_id, client_secret } = store.options;
    return {
        Authorization: 'Basic ' + btoa(`${client_id}:${client_secret}`)
    };
}

/**
 * 登陆后用户的凭证
 *
 * @returns
 */
function tokenAuthHeader() {
    return {
        Authorization: `token ${store.access_token}`
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
        client_id: store.options.client_id,
        redirect_uri: window.location.href,
        scope: 'public_repo',
        state: IDENTITY_STATE
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
    const { client_id, client_secret } = store.options;

    return http
        .fetch({
            method: 'POST',
            url: 'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token',
            params: {
                client_id,
                client_secret,
                code
            }
        })
        .then((body: any) => body.access_token);
}

/**
 * 获取当前用户信息
 *
 * @export
 * @returns
 */
export function getAuthUser() {
    return http.fetch({
        method: 'GET',
        url: '/user',
        headers: tokenAuthHeader(),
        query: {
            _: Math.random()
        }
    });
}

// #endregion

// #region issue 相关

/**
 * 创建一个 issue
 * https://developer.github.com/v3/issues/#create-an-issue
 *
 * @export
 * @param {string[]} labels
 * @param {string} title
 * @param {string} body
 * @returns
 */
export function createIssue(labels: string[], title: string, body: string) {
    const { owner, repo } = store.options;
    return http.fetch({
        method: 'POST',
        url: `/repos/${owner}/${repo}/issues`,
        headers: tokenAuthHeader(),
        params: { labels, title, body }
    });
}

/**
 * 获取第一个 issue 相关信息
 *
 * @export
 * @returns {Promise<{ comments: number; number: number; html_url: string }>}
 */
export function getFirstIssue(): Promise<{ comments: number; number: number; html_url: string }> {
    const { owner, repo, uuid } = store.options;
    const labels = [uuid, ...ISSUE_LABELS].join(',');

    return http
        .fetch<{ comments: number; number: number; html_url: string }[]>({
            method: 'GET',
            url: `/repos/${owner}/${repo}/issues`,
            headers: basicAuthHeader(),
            query: {
                creator: owner,
                labels,
                _: Math.random()
            }
        })
        .then(list => list[0]);
}

/**
 * 获取 issue 对应的 reactions
 *
 * @export
 * @returns
 */
export function issueReactions() {
    const { owner, repo } = store.options;
    const number = store.issue.number;
    return http.fetch({
        method: 'GET',
        url: `/repos/${owner}/${repo}/issues/${number}/reactions`,
        headers: {
            ...basicAuthHeader(),
            // 获取 issue 信息的时候带上 reactions
            // https://developer.github.com/v3/reactions/#list-reactions-for-an-issue
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
 *
 * @export
 * @param {string} body
 */
export function createComment(body: string) {
    const { owner, repo } = store.options;
    const number = store.issue.number;

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
            mode: 'gfm',
            text: content
        }
    });
}

/**
 * 根据 page, per_page 获取某一页的评论
 *
 * @export
 * @param {number} [page]
 * @param {number} [per_page]
 * @returns
 */
export function getComments(page?: number, per_page?: number) {
    const { owner, repo } = store.options;
    const number = store.issue.number;

    return http.fetch({
        method: 'GET',
        url: `/repos/${owner}/${repo}/issues/${number}/comments`,
        headers: {
            ...basicAuthHeader(),
            Accept: [
                // 返回的 comment 带 reactions
                // https://developer.github.com/v3/issues/comments/#reactions-summary
                'application/vnd.github.squirrel-girl-preview',
                // body 的原始markdown，以及渲染的html。 全都要
                // https://developer.github.com/v3/issues/comments/#custom-media-types
                'application/vnd.github.v3.raw+json',
                'application/vnd.github.VERSION.html+json'
            ].join(',')
        },
        // 这个参数找不到了，，不知道咋回事。但是还能用
        // https://developer.github.com/v3/issues/comments/#list-comments-on-an-issue
        query: {
            page: page || store.comments.page,
            per_page: per_page || store.comments.per_page,
            _: Math.random()
        }
    });
}

/**
 * 获取某comment的点赞信息
 *
 * @export
 * @param {string} commentId
 * @returns {Promise<any>}
 */
export function commentReactions(commentId: string): Promise<any> {
    const { owner, repo } = store.options;
    return http.fetch({
        method: 'GET',
        url: `/repos/${owner}/${repo}/issues/comments/${commentId}/reactions?_=${Math.random()}`,
        headers: {
            ...basicAuthHeader(),
            // 获取 issue 的 reactions
            // https://developer.github.com/v3/reactions/#list-reactions-for-an-issue-comment
            Accept: 'application/vnd.github.squirrel-girl-preview+json'
        }
    });
}

// #endregion

// #region 点赞相关

/**
 * 给 issue 点赞
 *
 * @export
 * @returns
 */
export function heartIssue() {
    const { owner, repo } = store.options;
    const number = store.issue.number;

    return http.fetch({
        method: 'POST',
        url: `/repos/${owner}/${repo}/issues/${number}/reactions`,
        headers: {
            ...tokenAuthHeader(),
            // https://developer.github.com/v3/reactions/#create-reaction-for-an-issue
            Accept: 'application/vnd.github.squirrel-girl-preview+json'
        },
        params: {
            content: 'heart'
        }
    });
}

/**
 * 取消issue的赞
 * https://developer.github.com/v3/reactions/#delete-a-reaction
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
 * https://developer.github.com/v3/reactions/#create-reaction-for-an-issue-comment
 *
 * @export
 * @param {string} commentId
 * @returns
 */
export function heartComment(commentId: string) {
    const { owner, repo } = store.options;

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
 * 取消 comment 的赞
 *
 * @export
 * @param {*} heartId
 * @returns
 */
export function deleteCommentHeart(heartId: string) {
    return deleteIssueHeart(heartId);
}

//#endregion
