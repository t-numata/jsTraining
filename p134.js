const oldSchool = (function() {
    let count = 0;
    return function() {
        return `oldSchool counter result is ${++count}`;
    };
})();

console.log(oldSchool());
console.log(oldSchool());
console.log(oldSchool());

// ES6からアロー関数を使うと以下の通りになる
const newWave = (() => {
    let newCount = 0;
    return () => {
        newCount += 1;
        return `newWave conter result is ${newCount}`;
    };
})();

console.log(newWave());
console.log(newWave());
console.log(newWave());

/**
 * IIFEの記法に沿っているため、fに代入される関数は読み込まれßßた時点で実行される
 * そのため、let count = 0が実行され、
 * fの中身は以下の通りになる
 * function () {
 *      return `counter result is ${++count}`;
 * }
 * 即時実行される関数を用いることで、countの定義済みの関数を代入することができる。
 */
