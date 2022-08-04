// 复写toFixed的四舍五入方法
export function reToFixed () {
    // eslint-disable-next-line no-extend-native
    Number.prototype.toFixed = function (s) {
        let times = Math.pow(10, s);
        let des = 0;
        if (this > 0) des = this * times + 0.5;
        else des = this * times - 0.5;
        des = parseInt(des, 10) / times;
        return des + "";
    };
}

/**
 * 上面的复写toFixed方法有问题，测试数据：9.655 ---> 9.65
 * 所以改成下面这种方法：9.655 ---> 9.66
 * 参考 https://www.cnblogs.com/gushen/archive/2012/11/20/2778324.html
 */
// eslint-disable-next-line no-extend-native
// export function reToFixed() {
//     Number.prototype.toFixed = function(d) {
//         let sr = this + "";
//         if (!d) d = 0;
//         if (sr.indexOf(".") === -1) sr += ".";
//         sr += new Array(d + 1).join("0");
//         if (
//             new RegExp("^(-|\\+)?(\\d+(\\.\\d{0," + (d + 1) + "})?)\\d*$").test(
//                 sr
//             )
//         ) {
//             let s = "0" + RegExp.$2;
//             let pm = RegExp.$1;
//             let a: any = RegExp.$3.length;
//             let b = true;
//             if (a === d + 2) {
//                 a = s.match(/\d/g);
//                 if (parseInt(a[a.length - 1]) > 4) {
//                     for (let i = a.length - 2; i >= 0; i--) {
//                         a[i] = parseInt(a[i]) + 1;
//                         if (a[i] === 10) {
//                             a[i] = 0;
//                             b = i !== 1;
//                         } else break;
//                     }
//                 }
//                 s = a
//                     .join("")
//                     .replace(new RegExp("(\\d+)(\\d{" + d + "})\\d$"), "$1.$2");
//             }
//             if (b) s = s.substr(1);
//             return (pm + s).replace(/\.$/, "");
//         }
//         return this + "";
//     };
// }
