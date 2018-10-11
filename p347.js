const fs = require('fs');

fs.readdir('.', (err, files) => {
    if (err) {
        console.error('致命的なエラー: ディレクトリを読み込めません');
        process.exit(1);
    }
    const jsFiles = files.filter(f => /\.js/i.test(f));

    if (jsFiles.length === 0) {
        console.log('対象のファイルが見つかりません');
        process.exit(0);
    }
    console.log(jsFiles);
});

console.log('last line');

/**
 * 終了コード0が返ってくれば処理が正常に完了したことを示す
 * それ以外を返すことで、エラーが発生したことを知らせることができる
 */
