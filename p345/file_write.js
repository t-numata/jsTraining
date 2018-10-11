const fs = require('fs');
const path = require('path');

const message = 'ファイルへ書き込みをしましたよ\n';
try {
    fs.writeFileSync(path.join(__dirname, 'hello.txt'), message);
} catch (err) {
    console.error('ファイルに書き込みができませんでした');
}
