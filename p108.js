function forPrim(x) {
    console.log(`inside of forPrim before ${x}`);
    x = 5;
    console.log(`inside of forPrim after ${x}`);
}

function forObj(o) {
    console.log(`inside of forObj before ${o.message}`);
    o.message = 'forObj内で代入しました';
    console.log(`inside of forPbj after ${o.message}`);
}

const x = 3;
console.log(`outside of forPrim before ${x}`);
forPrim(x);
console.log(`outside of forPrim before ${x}`);

const o = {
    message: 'message初期値',
};

console.log(`outside of forObj before ${o.message}`);
forObj(o);
console.log(`outside of forObj before ${o.message}`);

/**
 * プリミティブの値を関数に渡した場合は、呼び出し前後で渡された値は変化しない
 * オブジェクトを関数に渡した場合は、呼び出し後のプロパティの値が変化する
 */
