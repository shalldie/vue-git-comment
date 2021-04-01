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

function fetch<T = any>(options: IFetchOptions): Promise<T> {
    let { method, url, proxy, query, params, headers } = options;

    if (!/^http/.test(url)) {
        url = BASE_URL + url;
    }

    if (proxy) {
        url = proxy + url;
    }

    return new Promise<T>((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.onload = function () {
            const contentType = this.getResponseHeader('content-type') || '';
            if (!/json/.test(contentType)) {
                resolve(this.responseText as any);
                return;
            }
            const result = this.responseText ? JSON.parse(this.responseText) : {};
            resolve(result);
        };

        xhr.onerror = function (ex: any) {
            console.log('invoke xhr error', ex);
            reject(ex.message);
        };

        if (query) {
            url = appendQuery(url, query);
        }

        xhr.open(method, url, true);

        headers = {
            Accept: 'application/json',
            ...headers
        };
        for (const key in headers) {
            xhr.setRequestHeader(key, headers[key]);
        }

        if (method === 'POST') {
            xhr.setRequestHeader('Content-Type', 'application/json');
        }
        xhr.send(params ? JSON.stringify(params) : null);
    });
}

export const http = {
    fetch
};
