import http from './http';

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
 * @param {any} owner
 * @param {any} repo
 * @param {any} number
 * @returns
 */
export function getIssue(owner, repo, number) {
    return http.get(`/repos/${owner}/${repo}/issues/${number}`)
        .then(body => JSON.parse(body));
}

export function getRateLimit() {
    return http.get(`/rate_limit`);
}
