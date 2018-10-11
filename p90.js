console.log(NaN === NaN);
console.log(NaN == NaN);
console.log(isNaN(NaN));
console.log(isNaN(3));
console.log(isNaN(3.6));
console.log(isNaN('abc'));

/**
 * NaNはどの値とも等価にならない
 * 数値判定にはisNaNを使うこと
 */
