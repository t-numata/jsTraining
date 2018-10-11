{
    const color = 'blue';
    console.log(color);
    {
        const color = 111111;
        console.log(color);
    }
    console.log(color);
}
console.log(typeof color);

/**
 * L4からのブロックでは上の階層のxをマスクしている
 * 名前が同じ変数が宣言されたとき、上の階層の同名変数にアクセスできなくなる
 */
