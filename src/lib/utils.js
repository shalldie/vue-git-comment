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
