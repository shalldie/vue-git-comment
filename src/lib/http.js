import Deferred from './Deferred';
import store from './store';
import { stringifyQuery, appendQuery } from "./utils";

const baseUrl = 'https://api.github.com';
/**
 * 进行ajax请求
 *
 * @param {string} method
 * @param {string} url
 * @param {any} [data={}]
 * @param {boolean} [proxy=false]
 */
function ajax(method, url, data = {}, proxy = false) {
    method = method.toUpperCase();
    if (!/^http/.test(url)) {
        url = baseUrl + url;
    }
    if (!store.ifLogin) {
        Object.assign(data, {
            client_id: store.client_id,
            client_secret: store.client_secret
        });
    }
    if (proxy) {
        url = 'https://cors-anywhere.herokuapp.com/' + url;
    }

    const dfd = new Deferred();
    const xh = new XMLHttpRequest();

    xh.onload = function () {
        const contentType = this.getResponseHeader('content-type');
        if (!/json/.test(contentType)) {
            dfd.resolve(this.responseText);
            return;
        }
        const data = this.responseText ? JSON.parse(this.responseText) : {};
        if (data.message) {
            dfd.reject(data.message);
            return;
        }
        dfd.resolve(data);
    };
    xh.onerror = function (ex) {
        dfd.reject(ex.message);
    };

    if (method === 'GET' || method === 'DELETE') {
        url = appendQuery(url, data);
        data = null;
    }
    else if (method === 'POST') {
        data = JSON.stringify(data);
    }

    xh.open(method, url, true);
    xh.setRequestHeader('Accept', '*/*,application/vnd.github.squirrel-girl-preview,application/vnd.github.html+json');
    if (store.access_token) {
        xh.setRequestHeader('Authorization', `token ${store.access_token}`);
    }
    if (method === 'POST') {
        xh.setRequestHeader('Content-Type', 'application/json');
    }
    xh.send(data);

    return dfd.promise;
}

export default {
    /**
     * 进行 get 请求
     *
     * @param {string} url 地址
     * @param {any} data 要传递的数据
     * @param {boolean} proxy 是否启用代理
     */
    get: (url, data, proxy) => ajax('get', url, data, proxy),
    /**
     * 进行 delete 请求
     *
     * @param {string} url 地址
     */
    delete: url => ajax('delete', url),
    /**
     * 进行 post 请求
     *
     * @param {string} url 地址
     * @param {any} data 要传递的数据
     * @param {boolean} proxy 是否启用代理
     */
    post: (url, data, proxy) => ajax('post', url, data, proxy)
}
