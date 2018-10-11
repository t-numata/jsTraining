console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof true);
console.log(typeof 1);
console.log(typeof '');
console.log(typeof Symbol('test symbol'));

// typeofでfunctionを返すようにする
const functionVal = () => 0;
console.log(typeof functionVal);

/**
 * typeof nullは[object]を返す
 * 意図しない結果となるが、歴史的背景からこうなっている
 */
