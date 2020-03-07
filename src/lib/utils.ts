/**
 * 将参数转换成 &key=value 格式
 *
 * @export
 * @param {Record<string, any>} params
 * @returns {string}
 */
export function stringifyQuery(params: Record<string, any>): string {
    return Object.keys(params)
        .map(key => `${key}=${encodeURIComponent(params[key])}`)
        .join('&');
}

/**
 * 将参数添加到url中
 *
 * @export
 * @param {string} url 地址
 * @param {any} query 参数
 * @returns {string}
 */
export function appendQuery(url: string, query: any): string {
    if (!~url.indexOf('?')) {
        return url + '?' + stringifyQuery(query);
    }

    if (url[url.length - 1] !== '&') {
        url = '&' + url;
    }

    return url + stringifyQuery(query);
}

/**
 * 从地址中根据key得到query值
 *
 * @export
 * @param {string} key
 * @param {string} [url=window.location.href] 地址
 * @returns {string}
 */
export function getQuery(key: string, url: string = window.location.href): string {
    const reg = new RegExp(`${key}=([^&#]*)`);
    const matches = url.match(reg);
    if (matches && matches.length) {
        return matches[1];
    }
    return '';
}

/**
 * 给html中的a标签加个 target="_blank"
 *
 * @export
 * @param {string} content
 * @returns
 */
export function addTargetBlank(content: string) {
    return content.replace(/(<a )/g, '$1target="_blank" ');
}

/**
 * 时间格式化
 *
 * @export
 * @param {Date} date
 * @param {string} format
 * @returns
 */
export function dateFormat(date: Date, format: string) {
    const dict = {
        'y+': date.getFullYear(),
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'H+': date.getHours(),
        'h+': date.getHours() - 12,
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (const k in dict) {
        const reg = new RegExp(k, 'g');
        format = format.replace(reg, function(g0: string) {
            return ('000000' + dict[k as keyof typeof dict]).slice(-g0.length);
        });
    }
    return format;
}

/* eslint-disable */

/**
 * 根据 第几页、每页数量、总数量 计算倒序时候应该进行查询的 page、per_page、offset
 * 这绝笔是整个项目最难的地方。算法原来真的有用 >_<#@!
 *
 * @export
 * @param {number} page 第几页
 * @param {number} per_page 每页数量
 * @param {number} count 总数量
 * @returns {page:number;per_page:number;offset:number}
 */
export function reversePageMatch(
    page: number,
    per_page: number,
    count: number
): { page: number; per_page: number; offset: number } {
    let hash: any[] = []; // 存储所有可能

    let to = count - (page - 1) * per_page; // 目标结束位置
    let from = to - per_page + 1; // 目标起始位置

    // i 是转换后每页数量
    for (let i = 100; i >= per_page; i--) {
        if (i > from) continue;

        let ifBetween = false;
        let k = 1;
        // 无论第几页，最后一个元素不能在 from 和 to 之间
        // k 是第几页
        for (; k < count / per_page; k++) {
            let temp = i * k; // 该分法在k页时，最后一个元素的位置
            if (temp >= from && temp < to) {
                ifBetween = true;
                break;
            }
            if (temp >= to) {
                break;
            }
        }

        if (!ifBetween) {
            // 该方法符合期望
            hash.push({
                page: k,
                per_page: i,
                offset: from - ((k - 1) * i + 1)
            });
        }
    }

    hash.sort((a, b) => {
        return a.per_page - b.per_page;
    });

    // 一般在倒序的最后一页
    if (!hash.length) {
        hash.push({
            page: 1,
            per_page: to,
            offset: from - 1
        });
    }

    hash[0].offset < 0 && (hash[0].offset = 0);

    return hash[0];
}

/* eslint-enable */
