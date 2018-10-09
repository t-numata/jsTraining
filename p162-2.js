const SYM = Symbol();
const o = {a: 1, b: 2, c: 3};
o[SYM] = 4;
for(let prop in o) {
    if(!o.hasOwnProperty(prop)) continue;
    console.log(`${prop}: ${o[prop]}`);
}

console.log(o[SYM]);

/**
 * オブジェクトのプロパティを取得する
 * キーがシンボルだとリストされない
 * symbolでプロパティを扱いたい場合はL9のようにする
 */