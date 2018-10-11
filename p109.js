function testForObjectBehave(sampleObject) {
    console.log(
        `inside of testForObjectBehave before set sampleObject.message = ${
            sampleObject.message
        }`
    );
    sampleObject.message = 'fで最初のセット'; // 動作確認用の代入
    console.log(
        `inside of testForObjectBehave 1st set sampleObject.message = ${
            sampleObject.message
        }`
    );
    // 動作確認用の代入
    sampleObject = {
        message: '新しいオブジェクト',
    };
    console.log(
        `inside of testForObjectBehave 2nd set sampleObject.message = ${
            sampleObject.message
        }`
    );
}

const sampleObject = {
    message: '初期値',
};

console.log(
    `outside of testForObjectBehave before sampleObject.message = ${
        sampleObject.message
    }`
);
testForObjectBehave(sampleObject);
console.log(
    `outside of testForObjectBehave after sampleObject.message = ${
        sampleObject.message
    }`
);

/**
 * L3では渡されたオブジェクトの値を参照している
 * L5で新しいオブジェクトを生成したため、これは渡されたオブジェクトと別物
 * そのため、f(o)で渡されたオブジェクトには影響はない
 */
