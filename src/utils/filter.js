import dayjs from "dayjs";

/**
 * 格式化金额
 *
 * @export
 * @param {*} v
 * @returns
 */
export function moneyFormat (v) {
    if (isNaN(v)) {
        // return v
        return 0.0;
    }
    v = Math.round((v - 0) * 100) / 100;
    v =
        v == Math.floor(v)
            ? v + ".00"
            : v * 10 == Math.floor(v * 10)
                ? v + "0"
                : v;
    v = String(v);
    var ps = v.split(".");
    var whole = ps[0];
    var sub = ps[1] ? "." + ps[1] : ".00";
    var r = /(\d+)(\d{3})/;
    while (r.test(whole)) {
        whole = whole.replace(r, "$1" + "," + "$2");
    }
    v = whole + sub;

    return v;
}

/**
 * 按格式进行日期过滤
 *
 * @export
 * @param {any} date
 * @param {string} format   // 格式
 * @returns {string}
 */
// 年月日
export function dateFormat (date, format = "YYYY-MM-DD") {
    if (!date || !new Date(date)) return "";
    return dayjs(date).format(format);
}

/**
 * 按格式进行日期过滤
 *
 * @export
 * @param {any} date
 * @param {string} format   // 格式
 * @returns {string}
 */
// 月日
export function monthFormat (date, format = "MM/DD") {
    if (!date || !new Date(date)) return "";
    return dayjs(date).format(format);
}

/**
 * 按格式进行日期过滤
 *
 * @export
 * @param {any} date
 * @param {string} format   // 格式
 * @returns {string}
 */
// 年月日时分秒
export function dateTimeFormat (date, format = "YYYY-MM-DD HH:mm") {
    if (!date || !new Date(date)) return "";
    return dayjs(date).format(format);
}

// %
export function percentage (data) {
    let text = `${data}%`;
    return text;
}
