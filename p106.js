function getGreeding() {
    return "Hello World!";
}

console.log(getGreeding());
console.log(getGreeding);

/**
 * console.log(getGreeding);で、関数を「参照」できる
 * そのため以下のような代入が可能になる
 */

const f = getGreeding;
console.log(f());

const o = {};
o.f = getGreeding;
console.log(o.f());

const arr = [1,2,3];
arr[1] = getGreeding;
console.log(arr[1]());