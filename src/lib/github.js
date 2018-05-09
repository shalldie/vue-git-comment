import http from './http';
import { getQuery, appendQuery } from "./utils";
import state from '../state';

/**
 * 找到第一个符合的issue
 *
 * @export
 * @param {string} owner 仓库所有者
 * @param {string} repo 仓库名称
 * @param {string} labels labels 用逗号分隔
 * @returns {any>}
 */
export function getFirstIssue(owner, repo, labels) {
    return http.get(`/repos/${owner}/${repo}/issues`, {
        creator: owner,
        labels
    }).then(body => JSON.parse(body)[0]);
}

/**
 *
 *
 * @export
 * @param {string} owner
 * @param {string} repo
 * @param {number} number
 * @returns
 */
export function getIssue(owner, repo, number) {
    return http.get(`/repos/${owner}/${repo}/issues/${number}`)
        .then(body => JSON.parse(body));
}

/**
 * 获取token
 * 
 * @export
 * @param {string} client_id 
 * @param {string} client_secret 
 * @param {string} code 
 * @returns {Promise<string>}
 */
export function getToken(client_id, client_secret, code) {
    return http
        .post('https://github.com/login/oauth/access_token', {
            client_id: state.client_id,
            client_secret: state.client_secret,
            code
        }, true)
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

export function getAuthUser() {
    return http.get('/user');
}
