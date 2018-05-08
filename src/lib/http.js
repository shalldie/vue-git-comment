import Deferred from './Deferred';
import { stringifyQuery } from "./utils";

const baseUrl = 'https://api.github.com';
/**
 *
 *
 * @param {string} method
 * @param {string} url
 * @param {any} [data={}]
 */
function ajax(method, url, data = {}) {
    method = method.toUpperCase();

    const dfd = new Deferred();
    const xh = new XMLHttpRequest();
    xh.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            dfd.resolve(this.responseText);
        }
    };

    if (method === 'GET') {
        url = url + '?' + stringifyQuery(data);
        xh.open(method, url, true);
        xh.send(null);
    }
    else if (method === 'POST') {
        xh.open(method, url, true);
        xh.send(data);
    }
}
