// プリミティブ比較実験
const numberVal = 5;
const stringVal = '5';

console.log(numberVal === stringVal);
console.log(numberVal !== stringVal);
console.log(numberVal === Number(stringVal));
console.log(numberVal !== Number(stringVals));

// 非推奨の比較(動作確認)
console.log(numberVal == stringVal);
console.log(numberVal != stringVal);

// オブジェクト比較実験
const a = { name: 'あるオブジェクト' };
const b = { name: 'あるオブジェクト' };

console.log(a === b);
console.log(a !== b);

// 非推奨の比較(動作確認)
console.log(a == b);
console.log(a != b);

/**
 * オブジェクトの比較では「同じオブジェクトを参照しているかどうか」が比較される
 * そのため、オブジェクト内のプロパティが同じでも、参照しているオブジェクトが違えば
 * 等価ではないとされる
 */
