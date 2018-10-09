// プリミティブ比較実験
const n = 5;
const s = "5";

console.log(n === s);
console.log(n !== s);
console.log(n === Number(s));
console.log(n !== Number(s));
// 非推奨の比較
console.log(n == s);
console.log(n != s);

// オブジェクト比較実験
const a = {name: "あるオブジェクト"};
const b = {name: "あるオブジェクト"};

console.log(a === b);
console.log(a !== b);
// 非推奨の比較
console.log(a == b);
console.log(a != b);

/**
 * オブジェクトの比較では「同じオブジェクトを参照しているかどうか」が比較される
 * そのため、オブジェクト内のプロパティが同じでも、参照しているオブジェクトが違えば
 * 等価ではないとされる
 */