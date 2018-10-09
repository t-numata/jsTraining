class Log {
    constructor() {
        this.messages = [];
    }

    add(message) {
        const now = Date.now();
        console.log(`ログ追加: ${message} (${now})`);
        this.messages.push({message, timestamp:now});
    }
    [Symbol.iterator]() {
        return this.messages.values();
    }
}

const log = new Log();
log.add('海の監視開始');

setTimeout(function () { log.add('クジラを見た'), 3 * 1000});
setTimeout(function () { log.add('船を見た'), 4 * 1000});
setTimeout(function () { log.add('メガロドンが来た'), 5 * 1000});
setTimeout(function () { log.add('ステイサムが撃退した！'), 6 * 1000});


setTimeout(function () {
    console.log(` --- 監視完了 (${new Date()}) ---`);
    for(let entry of log) {
        const date = new Date(entry.timestamp);
        console.log(`${entry.message} (${date})`);
    }
}, 11 * 1000);



/**
 * イテレータを時前で作成する方法
 */