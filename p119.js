const groot = { name: 'Groot' };
const steve = { name: 'Steve' };

function greet() {
    return `I am ${this.name}`;
}

console.log(greet());
console.log(greet.call(groot));
console.log(greet.call(steve));

/**
 * callはすべての関数に対して使用できるメソッド
 * thisに対して特定の値を設定したうえで関数を呼び出すことができる
 */
