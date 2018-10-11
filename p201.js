class Log {
    constructor() {
        this.messages = [];
    }

    addMessage(message) {
        const now = Date.now();
        console.log(`ログ追加: ${message} (${now})`);
        this.messages.push({ message, timestamp: now });
    }

    getMessages() {
        return this.messages;
    }
}

const log = new Log();
log.addMessage('海の監視開始');

setTimeout(() => log.addMessage('クジラを見た'), 3 * 1000);
setTimeout(() => log.addMessage('船を見た'), 4 * 1000);
setTimeout(() => log.addMessage('メガロドンが来た'), 5 * 1000);
setTimeout(() => log.addMessage('ステイサムが撃退した！'), 6 * 1000);

const logMessages = log.getMessages();
setTimeout(() => {
    console.log(` --- 監視完了 (${new Date()}) ---`);
    logMessages.forEach(entry => {
        const date = new Date(entry.timestamp);
        console.log(`${entry.message} (${date})`);
    });
}, 11 * 1000);

/**
 * イテレータを時前で作成する方法
 */
