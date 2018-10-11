{
    const x = 'blue';
    console.log(x);
    {
        const x = 3;
        console.log(x);
    }
    console.log(x);
}
console.log(typeof x);

/**
 * L4からのブロックでは上の階層のxをマスクしている
 * 名前が同じ変数が宣言されたとき、上の階層の同名変数にアクセスできなくなる
 */
