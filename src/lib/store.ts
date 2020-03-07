/**
 * 全局的数据
 *
 * @export
 * @class StateStore
 */
export class StateStore {
    access_token = '';
    /**
     * 初始化配置
     *
     * @memberof StateStore
     */
    options = {
        client_id: '',

        client_secret: '',

        owner: '',

        repo: '',

        uuid: '',

        /** 可选属性 */
        ...(() => {
            const optional = {
                title: '', // 标题，可选，最多20字
                language: 'en' as 'en' | 'zh-CN' // 国际化
            };

            return optional as Partial<typeof optional>;
        })()
    };

    state = {
        /**
         * 正在初始化
         */
        loading: true,

        /**
         * 是否登录
         */
        ifLogin: false
    };

    /**
     * 登陆用户信息
     */
    userInfo = {
        loading: false,
        name: '',
        avatar_url: '',
        html_url: ''
    };

    issue = {
        /**
         * 是否已经创建
         */
        created: true,
        /**
         * issue 的number
         */
        number: 0,
        /**
         * issue 的地址
         */
        html_url: '',
        /**
         * `heart` 的id
         */
        heartId: '',

        /**
         * `喜欢` 的人的 id、用户名
         */
        likedList: [] as Array<{ id: string; name: string }>
    };

    comments = {
        /**
         * 正在加载
         */
        loading: false,

        /**
         * 评论的数量
         */
        count: 0,

        /**
         * 第几页
         */
        page: 1,

        /**
         * 每页数量
         */
        per_page: 10,

        /**
         * true-由旧到新 false-由新到旧
         */
        sortedAsc: true,

        /**
         * 当前页的评论
         */
        list: [] as Array<{
            id: number;
            /** html格式的内容 */
            body_html: string;
            /** 原始markdown内容 */
            body: string;
            created_at: string;
            heart: number;
            likedList: Array<{ id: string; name: string }>;
            user: {
                name: string;
                avatar_url: string;
                link: string;
            };
        }>
    };

    public extend(store: Partial<StateStore>): void {
        Object.assign(this, store);
    }

    public reset(): void {
        this.extend(new StateStore());
    }
}

export default new StateStore();
