const fs = require('fs');
const path = require('path');

console.log(0);

let data;
try {
    data = fs.readFileSync(path.join(__dirname, 'hello.txt'), {
        encoding: 'utf8',
    });
} catch (err) {
    console.error('ファイルの読み込みができませんでした');
}

console.log(data);
