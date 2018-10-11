// 関数の宣言と呼び出し
function getGreeding() {
    return 'Hello World!';
}

console.log(getGreeding());
console.log(getGreeding);

// 変数へ格納した際の挙動
const funcVal = () => 'Hello World';
console.log(funcVal());

const sampleObject = {};
sampleObject.funcVal = getGreeding;
console.log(sampleObject.funcVal());

const sampleArray = [1, 2, 3];
sampleArray[1] = getGreeding;
console.log(sampleArray[1]());
