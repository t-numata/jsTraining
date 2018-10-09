const fs = require('fs');

const fname = 'xxx';
fs.readFile(fname, function(err, data) {
    if(err) {
        return console.error(`ファイルの読み込み時エラー ${fname}: ${err.message}`);
    }
    console.log(`ファイル${fname}の中身を表示します`);
});

/**
 * コールバックの例
 */