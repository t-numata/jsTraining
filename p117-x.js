class StopClass {
    constructor() {
        this.stop = false;
    }

    stopIt(stop) {
        this.stop = stop;
        if (this.stop) {
            console.log('stop function is stop');
        } else {
            console.log('stop function call itself again');
            this.stopIt(true);
        }
    }
}

const stopTest = new StopClass();
console.log(stopTest);
stopTest.stopIt(false);
console.log('----');
stopTest.stopIt(true);

/**
 * 再帰処理をする場合はClass内で呼び出すこともある
 * この場合はthis.stopItで再起が可能
 */
