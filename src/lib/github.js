import http from './http';
import { getQuery, appendQuery } from "./utils";
import store from './store';
import { ISSUE_LABELS } from './constants';

/**
 * 找到第一个符合的issue
 *
 * @export
 * @returns {any>}
 */
export function getFirstIssue() {
    const { owner, repo } = store;
    const labels = [store.uuid, ...ISSUE_LABELS].join(',');
    return http.get(`/repos/${owner}/${repo}/issues`, {
        client_id: store.client_id,
        client_secret: store.client_secret,
        creator: owner,
        labels,
        _: Math.random()
    }, {
            noAuth: true
        }).then(data => data[0]);
}

/**
 * 获取token
 *
 * @export
 * @param {string} code
 * @returns {Promise<string>}
 */
export function getToken(code) {
    const { client_id, client_secret } = store;
    return http
        .post('https://github.com/login/oauth/access_token', {
            client_id,
            client_secret,
            code
        }, { proxy: true })
        .then(body => getQuery(body, 'access_token'));
}

/**
 * 跳转去认证
 *
 * @export
 * @param {string} client_id
 */
export function toAuthorize(client_id) {
    let url = 'https://github.com/login/oauth/authorize';
    url = appendQuery(url, {
        client_id: client_id,
        redirect_uri: window.location.href,
        scope: 'public_repo',
        state: window.location.href
    });
    window.location.href = url;
}

/**
 * 获取用户信息
 *
 * @export
 * @returns {Promise<any>}
 */
export function getAuthUser() {
    return http.get('/user');
}

/**
 * 获取markdown信息
 *
 * @export
 * @param {string} content
 * @returns {Promise<string>}
 */
export function getMarkDown(content) {
    return http.post('/markdown', {
        mode: 'gfm',
        text: content
    });
}

/**
 * 获取评论信息
 *
 * @export
 * @param {number} page 第几页
 * @param {number} per_page 每页数量
 * @returns
 */
export function getComments(page, per_page) {
    const { owner, repo, issue: { number } } = store;
    return http.get(`/repos/${owner}/${repo}/issues/${number}/comments`, {
        client_id: store.client_id,
        client_secret: store.client_secret,
        page: page || store.comments.page,
        per_page: per_page || store.comments.per_page,
        _: Math.random()
    }, { noAuth: true });
}

/**
 * 创建个 issue
 *
 * @export
 * @param {Array<string>} labels
 * @param {string} title
 * @param {string} body
 * @returns
 */
export function createIssue(labels, title, body) {
    const { owner, repo } = store;
    return http.post(`/repos/${owner}/${repo}/issues`, {
        labels,
        title,
        body
    });
}
/**
 * 创建一个 comment
 *
 * @export
 * @param {string} body
 * @returns
 */
export function createComment(body) {
    const { owner, repo, issue: { number } } = store;
    return http.post(`/repos/${owner}/${repo}/issues/${number}/comments`, { body });
}

/**
 * 获取issue的点赞信息
 *
 * @export
 * @returns
 */
export function issueReactions() {
    const { owner, repo, issue: { number } } = store;
    return http.get(`/repos/${owner}/${repo}/issues/${number}/reactions`);
}

/**
 * 获取comment的点赞信息
 *
 * @export
 * @param {any} commentId
 * @returns
 */
export function commentReactions(commentId) {
    const { owner, repo } = store;
    return http.get(`/repos/${owner}/${repo}/issues/comments/${commentId}/reactions`);
}

/**
 * 给issue点赞
 *
 * @export
 * @returns
 */
export function heartIssue() {
    const { owner, repo, issue: { number } } = store;
    return http.post(`/repos/${owner}/${repo}/issues/${number}/reactions`, {
        content: 'heart'
    });
}

/**
 * 取消issue的赞
 *
 * @export
 * @param {string} id heart的id
 * @returns
 */
export function deleteIssueHeart(heartId) {
    return http.delete(`/reactions/${heartId}`);
}

export function heartComment(commentId) {
    const { owner, repo, issue: { number } } = store;
    return http.post(`/repos/${owner}/${repo}/issues/comments/${commentId}/reactions`, {
        content: 'heart'
    });
}

export function deleteCommentHeart(heartId) {
    return deleteIssueHeart(heartId);
}
