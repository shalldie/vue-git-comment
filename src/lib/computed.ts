// 1~103
const baseList: Array<number> = Array.apply(null, Array(103)).map((item, index) => index + 1);

/**
 * 获取某页数据 asc
 *
 * @param {number} page 第几页
 * @param {number} per_page 每页数量
 * @returns {Array<any>}
 */
function fetchPage(page: number, per_page: number) {
    return baseList.slice((page - 1) * per_page, page * per_page);
}


// ---------------------------

/**
 * 获取某页数据（倒序）
 *
 * @param {number} page 第几页
 * @param {number} per_page 每页数量
 * @param {number} count 总条目数
 */
function fetchPageDesc(page: number, per_page: number, count: number) {

    // const sumPageNum = ~~(count / per_page); // 总页数

    // const left = count % per_page; // 余数

    // // console.log(sumPageNum, left);

    // page = sumPageNum - page + 1 + left;

    let match = bestMatch(page, per_page, count);

    console.log(match);

    return fetchPage(match.page, match.per_page).slice(match.offset, match.offset + per_page);
}


// console.log(fetchPageDesc(1, 10, 103).toString());


function bestMatch(page: number, per_page: number, count: number) {

    let hash: Array<{ per_page: number, page: number, offset: number }> = [];  // 存储所有可能

    let to = count - (page - 1) * per_page;  // 目标结束位置
    let from = to - per_page + 1;  // 目标起始位置

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

        if (!ifBetween) { // 该方法符合期望
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

    return hash[0];
}

// 1 ~ 103
// 倒数第 1 页 ， 每页 3

// 2 100 => 97
// 3 50 => 47
// 5 25 => 22
// 11 10 =》 7
// 21 5 =》2
// 25 4 =》1

// console.log(bestMatch(1, 10, 103));

console.log(fetchPageDesc(9, 10, 103).toString());
