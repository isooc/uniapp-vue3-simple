/**
 *判断是否为空
 *
 * @export
 * @param {*} val 字符串 对象
 * @returns
 */
export function isEmpty (val) {
    if (val === undefined || val === null || val === "" || val.length === 0) {
        return true;
    }
    if (typeof val === "string") {
        if (val.trim().length === 0) return true;
    } else if (typeof val === "object") {
        if (JSON.stringify(val) === "{}") return true;
    }
    return false;
}

/**
 *非空判断（数组）
 *
 * @export
 * @param {*} array
 * @returns
 */
export function isEmptyArray (array) {
    if (array && Array.isArray(array) && array.length > 0) return false;
    return true;
}


/**
 * 深复制
 *
 * @export
 * @param {*} source
 * @returns
 */
export function copy (source) {
    if (!source && typeof source !== "object") {
        throw new Error("error arguments");
    }
    const targetObj = source.constructor === Array ? [] : {};
    for (const keys in source) {
        if (source.hasOwnProperty(keys)) {
            if (source[keys] && typeof source[keys] === "object") {
                targetObj[keys] = source[keys].constructor === Array ? [] : {};
                targetObj[keys] = copy(source[keys]);
            } else {
                targetObj[keys] = source[keys];
            }
        }
    }
    return targetObj;
}
