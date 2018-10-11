const fs = require('fs');

const readStream = fs.createReadStream(__dirname + "/stream.txt");
const writeStream = fs.createWriteStream(__dirname + '/stream_copy.txt');

readStream.pipe(writeStream);

/**
 * pipeのストリーム
 * データの移動によく活用されるとのこと
 *