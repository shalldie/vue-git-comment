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
    if (proxy) {
        url = 'https://cors-anywhere.herokuapp.com/' + url;
    }

    const dfd = new Deferred();
    const xh = new XMLHttpRequest();

    xh.onload = function () {
        if (this.status != 200) {
            dfd.reject(this.responseText);
            return;
        }
        dfd.resolve(this.responseText);
    };
    xh.onerror = function (ex) {
        dfd.reject(ex.message);
    };

    if (method === 'GET') {
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
     * 进行 post 请求
     *
     * @param {string} url 地址
     * @param {any} data 要传递的数据
     * @param {boolean} proxy 是否启用代理
     */
    post: (url, data, proxy) => ajax('post', url, data, proxy)
}
