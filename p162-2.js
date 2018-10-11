const SYM = Symbol('fot test symbol');
const targetObject = { a: 1, b: 2, c: 3 };
targetObject[SYM] = 4;

for (const prop in targetObject) {
    if (!targetObject.hasOwnProperty(prop)) continue;
    console.log(`${prop}: ${targetObject[prop]}`);
}

console.log(targetObject[SYM]);

/**
 * オブジェクトのプロパティを取得する
 * キーがシンボルだとリストされない
 * symbolでプロパティを扱いたい場合はL9のようにする
 */
