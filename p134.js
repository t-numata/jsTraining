const f = (function() {
    let count = 0;
    return function () {
        return `counter result is ${++count}`;
    };
})();

console.log(f());
console.log(f());
console.log(f());

/**
 * IIFEの記法に沿っているため、fに代入される関数は読み込まれた時点で実行される
 * そのため、let count = 0が実行され、
 * fの中身は以下の通りになる
 * function () {
 *      return `counter result is ${++count}`;
 * }
 * 即時実行される関数を用いることで、countの定義済みの関数を代入することができる。
 */