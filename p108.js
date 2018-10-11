function forPrim(sampleParam) {
    console.log(`inside of forPrim before ${sampleParam}`);
    sampleParam = 5; // 動作確認用 関数外へは影響しない
    console.log(`inside of forPrim after ${sampleParam}`);
}

function forObj(sampleObject) {
    console.log(`inside of forObj before ${sampleObject.message}`);
    sampleObject.message = 'forObj内で代入しました'; // 動作確認用 渡されたsampleObjectのプロパティに影響する
    console.log(`inside of forPbj after ${sampleObject.message}`);
}

const sampleParam = 3;
console.log(`outside of forPrim before ${sampleParam}`);
forPrim(sampleParam);
console.log(`outside of forPrim before ${sampleParam}`);

const sampleObject = {
    message: 'message初期値',
};

console.log(`outside of forObj before ${sampleObject.message}`);
forObj(sampleObject);
console.log(`outside of forObj before ${sampleObject.message}`);

/**
 * プリミティブの値を関数に渡した場合は、呼び出し前後で渡された値は変化しない
 * オブジェクトを関数に渡した場合は、呼び出し後のプロパティの値が変化する
 */
