import axios from "axios";

const http = axios.create({
    baseURL: 'https://api.github.com'
});

/**
 * 获取所有issue列表
 *
 * @export
 * @param {string} owner 仓库所有者
 * @param {string} repo 仓库名称
 * @param {string} labels labels 用逗号分隔
 * @returns {Promise<Array<string>>}
 */
export async function getIssueList(owner, repo, labels) {
    const { data } = await http.get(`/repos/${owner}/${repo}/issues`, {
        headers: {
            Accept: 'application/vnd.github.symmetra-preview+json'
        },
        params: {
            creator: owner,
            labels
        }
    });
    return data;
}

