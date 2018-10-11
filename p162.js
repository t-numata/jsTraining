const SYM = Symbol();
const o = { a: 1, b: 2, c: 3, [SYM]: 4 };

for (const prop in o) {
    if (!o.hasOwnProperty(prop)) continue;
    console.log(`${prop}: ${o[prop]}`);
}

/**
 * オブジェクトのプロパティを取得する
 * キーがシンボルだとリストされない
 */
