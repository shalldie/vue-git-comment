import Deferred from './Deferred';
import { appendQuery } from './utils';

const BASE_URL = 'https://api.github.com';

interface IFetchOptions {
    method: 'GET' | 'POST' | 'DELETE';
    url: string;
    query?: object;
    params?: object;
    proxy?: string;
    headers?: Record<string, string>;
}

export function fetch<T = any>(options: IFetchOptions): Promise<T> {
    let { method, url, proxy, query, params, headers } = options;

    if (!/^http/.test(url)) {
        url = BASE_URL + url;
    }

    if (proxy) {
        url = proxy + url;
    }

    const dfd = new Deferred();
    const xh = new XMLHttpRequest();

    xh.onload = function() {
        const contentType = this.getResponseHeader('content-type') || '';
        if (!/json/.test(contentType)) {
            dfd.resolve(this.responseText);
            return;
        }
        const result = this.responseText ? JSON.parse(this.responseText) : {};
        dfd.resolve(result);
    };
    xh.onerror = function(ex: any) {
        console.log('invoke xhr error');
        dfd.reject(ex.message);
    };

    if (query) {
        url = appendQuery(url, query);
    }

    xh.open(method, url, true);

    headers = {
        Accept: 'application/json',
        ...headers
    };
    for (const key in headers) {
        xh.setRequestHeader(key, headers[key]);
    }

    if (method === 'POST') {
        xh.setRequestHeader('Content-Type', 'application/json');
    }
    xh.send(params ? JSON.stringify(params) : null);
    return dfd.promise as Promise<T>;
}

export default {
    fetch
};
