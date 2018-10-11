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

const alpabetical = avengers.reduce((accumulator, currentParam) => {
    if (!accumulator[currentParam[0]]) {
        accumulator[currentParam[0]] = [];
    }
    accumulator[currentParam[0]].push(currentParam);
    return accumulator;
}, []);

console.log(alpabetical);

/**
 * 配列の要素を頭文字ごとに整理する
 * 処理の流れ
 * 頭文字をキーとする配列が存在しているかチェック
 * なければ作成
 * 要素をpushして追加
 */
