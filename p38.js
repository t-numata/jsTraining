// 文字列と数値の混同
const result1 = `${3}30`;
console.log(result1);
// 数値3 が文字列となり結果は330

const result2 = 3 * '30';
console.log(result2);
// 文字列30が数値となり、結果は90

// ややこしや
