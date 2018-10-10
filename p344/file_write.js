const fs = require('fs');
const path = require('path');

const message = 'ファイルへ書き込みをしましたよ\n';

fs.writeFile(path.join(__dirname, "hello.txt"), message,function(err, data ) {
    if(err) return console.lof('エラーファイルに書き込みできませんでした');
});
