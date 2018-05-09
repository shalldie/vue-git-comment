import { appendQuery } from './utils';

class GitHub {

    constructor(options) {
        const { client_id, client_secret } = options;
        this.client_id = client_id;
        this.client_secret = client_secret;
    }

    client_id = ''

    client_secret = ''

    /**
     * 是否登陆
     *
     * @memberof GitHub
     */
    ifLogin = false

    /**
     * 去github获取权限
     *
     * @param {string} client_id
     * @memberof GitHub
     */
    login(client_id) {
        let url = 'https://github.com/login/oauth/authorize';
        url = appendQuery(url, {
            client_id,
            redirect_uri: window.location.href,
            scope: 'public_repo'
        });
        window.location.href = url;
    }

}

const github = {
    /**
     * 是否登陆
     */
    ifLogin: false,

    token: '',

    /**
     * 去github获取权限
     *
     * @param {string} client_id
     */
    login(client_id) {
        let url = 'https://github.com/login/oauth/authorize';
        url = appendQuery(url, {
            client_id,
            redirect_uri: window.location.href,
            scope: 'public_repo'
        });
        window.location.href = url;
        console.log(url);
    }
};

export default github;
