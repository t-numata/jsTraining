const debug = require('debug')('main');

debug('start');
for (let i = 0; i < 10; i += 1) {
    console.log(i);
}

debug('finish');

/**
 * node_modulesのdebugを用る
 * 定数をセットするために、実行は以下の通り
 * DEBUG=main node p341.js
 *
 * また、
 * require("debug")("main")
 * とすることで、返却される関数をその場で呼び出す
 */
