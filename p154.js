const avengers = [
    'Iron Man',
    'Captaion America',
    'Ant Man',
    'StarLoad',
    'Rocket',
    'Groot',
    'Thor',
    'Hulk',
    'Spider Man',
];

const alpabetical = avengers.reduce((a, x) => {
    if (!a[x[0]]) {
        a[x[0]] = [];
    }
    a[x[0]].push(x);
    return a;
}, []);

console.log(alpabetical);

/**
 * 配列の要素を頭文字ごとに整理する
 * 処理の流れ
 * 頭文字をキーとする配列が存在しているかチェック
 * なければ作成
 * 要素をpushして追加
 */
