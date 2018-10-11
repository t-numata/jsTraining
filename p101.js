const sampleObject = {
    amazon: 2,
    rakuten: 3,
    ebay: 4,
};
const { amazon, rakuten, ebay } = sampleObject;

console.log(amazon);
console.log(rakuten);
console.log(ebay);

// ここをコメントアウトするとエラーで終わる
// console.log(yahoo);

/**
 * aはundefined
 * dは代入されていないのでエラーで終わる
 */
