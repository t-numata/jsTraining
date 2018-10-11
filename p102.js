const sampleArray = [1, 2, 3];
const [firstVal, secondVal] = sampleArray;

console.log(firstVal);
console.log(secondVal);

// 変数の入れ替えが分割代入で簡単にできる
let swapValA = 5;
let swapValB = 10;

[swapValA, swapValB] = [swapValB, swapValA];

console.log(swapValA);
console.log(swapValB);

/**
 * 左辺の変数に、右辺の配列を分割代入している
 * これだと一時的な変数を使わなくても一発で入れ替えが可能
 */
