/**
 * @description 在登陆后可以用 graphql 进行查询，减少请求响应数据量
 * 
 * 但是暂时放弃使用 graphql
 * 这个需要 Authenticated ，会有 options 请求，太慢
 */
import store from './store';
import github from './github';
import http from './http';

export function getCommentsCount() {
    const query = `
query getCommentsCount($owner: String!, $repo: String!, $number: Int!) {
    repository(owner: $owner, name: $repo) {
        issue(number: $number) {
            comments {
                totalCount
            }
        }
    }
}`;
    const variables = {
        owner: store.owner,
        repo: store.repo,
        number: store.issue.number
    };
    return http.post('/graphql', {
        query, variables
    }).then(({ data }) => {
        return data.repository.issue.comments.totalCount;
    });
}
