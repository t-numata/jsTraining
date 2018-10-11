const fs = require('fs');

const readStream = fs.createReadStream(`${__dirname}/stream.txt`, {
    encoding: 'utf8',
});
readStream.on('data', data => {
    console.log(`>> data:${data.replace('\n', '\\n')}`);
});

readStream.on('end', data => {
    console.log('おわり');
});

/**
 * ファイル読み込みのストリーム
 */
