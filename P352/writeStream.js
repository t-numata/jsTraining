const fs = require('fs');

const writeStream = fs.createWriteStream(`${__dirname}/stream.txt`, {
    encoding: 'utf-8',
});
writeStream.write('1st line \n');
writeStream.write('2nd line \n');
writeStream.write('3rd line \n');

writeStream.end();

/**
 * ファイルへの書き込みのストリーム
 */
