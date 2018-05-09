/**
 * 将参数转换成 &key=value 格式
 *
 * @export
 * @param {any} params
 * @returns {string}
 */
export function stringifyQuery(params) {
    return Object.keys(params)
        .map(key => `${key}=${encodeURIComponent(params[key])}`)
        .join('&');
}

/**
 * 将参数添加到url中
 *
 * @export
 * @param {string} url 地址
 * @param {any} params 参数
 * @returns {string}
 */
export function appendQuery(url, params) {
    if (!~url.indexOf('?')) {
        return url + '?' + stringifyQuery(params);
    }

    if (url[url.length - 1] !== '&') {
        url = '&' + url;
    }

    return url + stringifyQuery(params);
}

/**
 * 从地址中根据key得到query值
 *
 * @export
 * @param {string} url 地址
 * @param {string} key
 * @returns {string}
 */
export function getQuery(url, key) {
    const reg = new RegExp(`${key}=([^&]*)`);
    let matches = url.match(reg);
    if (matches && matches.length) {
        return matches[1];
    }
    return '';
}
