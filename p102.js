const arr = [1, 2, 3];
let [x, y] = arr;
console.log(x);
console.log(y);

//変数の入れ替えが分割代入で簡単にできる
let a = 5, b = 10;
[a, b] = [b, a];
console.log(a);
console.log(b);

/**
 * 左辺の変数に、右辺の配列を分割代入している
 * これだと一時的な変数を使わなくても一発で入れ替えが可能
 */