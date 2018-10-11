const fs = require('fs');
const path = require('path');

fs.readFile(
    path.join(__dirname, 'hello.txt'),
    { encoding: 'utf8' },
    (err, data) => {
        if (err) return console.log('ファイルは読み込みできませんでした');
        console.log('show file');
        console.log(data);
    }
);
