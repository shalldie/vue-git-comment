import Vue from 'vue';

export type TOptions = {
    clientID: string;
    clientSecret: string;
    owner: string;
    repo: string;
    uuid: string;
    proxy?: string;
    title?: string;
    language?: 'en' | 'zh-CN';
};

export class StateStore {
    constructor() {
        this.state = Vue.observable(this.state);
    }

    state = {
        loading: true,
        ifLogin: false,
        accessToken: '',

        options: {
            clientID: '',
            clientSecret: '',
            owner: '',
            repo: '',
            uuid: '',
            proxy: 'https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token',
            title: undefined as undefined | string,
            language: 'en' as 'en' | 'zh-CN'
        } as TOptions,

        userInfo: {
            loading: false,
            name: '',
            /** 头像地址 */
            avatarUrl: '',
            /** 用户主页 */
            htmlUrl: ''
        },

        issue: {
            /** 是否已经创建 */
            created: true,
            /** issue 的number */
            number: 0,
            /** issue 的地址 */
            htmlUrl: '',
            /** `heart` 的id */
            heartId: '',
            /** `喜欢` 的人的 id、用户名 */
            likedList: [] as Array<{ id: string; name: string }>
        },

        comments: {
            /** 正在加载 */
            loading: false,
            /** 评论的数量 */
            count: 0,
            /** 第几页 */
            page: 1,
            /** 每页数量 */
            perPage: 10,
            /** true-由旧到新 false-由新到旧 */
            sortedAsc: true,
            /**
             * 当前页的评论
             */
            list: [] as Array<{
                id: number;
                /** html格式的内容 */
                bodyHtml: string;
                /** 原始markdown内容 */
                body: string;
                createdAt: string;
                heart: number;
                likedList: Array<{ id: string; name: string }>;
                user: {
                    name: string;
                    avatarUrl: string;
                    link: string;
                };
            }>
        }
    };

    /**
     * assign state
     *
     * @param {Partial<StateStore['state']>} state
     * @memberof StateStore
     */
    public extend(state: Partial<StateStore['state']>) {
        Object.assign(this.state, state || {});
    }

    /**
     * 重置数据
     *
     * @memberof StateStore
     */
    public reset() {
        this.extend(new StateStore().state);
    }
}

export const store = new StateStore();
