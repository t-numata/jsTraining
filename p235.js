const fs = require('fs');

const fname = 'xxx';
fs.readFile(fname, (err, data) => {
    if (err) {
        return console.error(
            `ファイルの読み込み時エラー ${fname}: ${err.message}`
        );
    }
    return console.log(`ファイル${fname}の中身を表示します ${data}`);
});

/**
 * コールバックの例
 */
