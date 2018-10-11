function f(o) {
    console.log(`inside of f before set o.message = ${o.message}`);
    o.message = 'fで最初のセット';
    console.log(`inside of f 1st set o.message = ${o.message}`);
    o = {
        message: '新しいオブジェクト',
    };
    console.log(`inside of f 2nd set o.message = ${o.message}`);
}

const o = {
    message: '初期値',
};

console.log(`outside of f before o.message = ${o.message}`);
f(o);
console.log(`outside of f after o.message = ${o.message}`);

/**
 * L3では渡されたオブジェクトの値を参照している
 * L5で新しいオブジェクトを生成したため、これは渡されたオブジェクトと別物
 * そのため、f(o)で渡されたオブジェクトには影響はない
 */
