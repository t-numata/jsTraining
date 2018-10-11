function addPrefix(prefix, ...words) {
    const prefixedWord = [];
    for (let i = 0; i < words.length; i += 1) {
        prefixedWord[i] = prefix + words[i];
    }

    return prefixedWord;
}

console.log(addPrefix('con', 'vers', 'vex'));
console.log(addPrefix('非', 'プログラマ', 'デザイナ', 'コーダー'));

/**
 * 展開演算子 (引数...words)をを使うことで
 * 任意の個数の変数を渡すことができる
 * ただし、展開演算子は関数の最後の引数にする必要がある
 */
