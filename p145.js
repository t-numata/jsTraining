let arr = [11, 12, 13, 14];
let arr2 = arr.copyWithin(1, 2);

console.log(arr);
console.log(arr2);

console.log(arr.copyWithin(2, 0, 2));
console.log(arr.copyWithin(0, -3, -1));
console.log(arr2);

/**
 * copyWithinの挙動の確認
 * copyWithinの返り値はオブジェクト自身なので、
 * L9でarr2はarrと同じ値を返す
 */