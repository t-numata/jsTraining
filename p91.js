/**
 * 以下コメント部分は無限ループとなり停止しない
 * 一見動きそうが、JavaScriptが倍精度浮動小数点数を使っているため、こうなる
 * 0.1は2進数で表すと循環してしまう
 * 0.3を期待している部分は 0.30000000000000004となる
 */

// let x = 0;
// while (true) {
//     x += 0.1;
//     console.log(x);
//     if (x === 0.3) {
//         break;
//     }
// }
// console.log(`${x}で停止`);

let x = 0;
while (true) {
    x += 0.1;
    console.log(x);
    if (Math.abs(x - 0.3) < Number.EPSILON) {
        break;
    }
}
console.log(`${x}で停止`)
console.log(Number.EPSILON)