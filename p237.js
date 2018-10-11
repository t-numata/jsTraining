function countdown(seconds) {
    return new Promise((onFulfilled, onRejected) => {
        for (let i = seconds; i >= 0; i -= 1) {
            setTimeout(() => {
                if (i === 13) {
                    return onRejected(new Error('数字が呪われている'));
                }
                if (i > 0) {
                    console.log(`${i}...`);
                } else {
                    return onFulfilled(console.log('GO'));
                }
            }, (seconds - 1) * 1000);
        }
    });
}
countdown(5).then(
    () => {
        console.log('カウントダウン成功！');
    },
    err => {
        console.log(`カウントダウンエラー発生${err.message}`);
    }
);

/**
 * promiseとthenの使い方
 */
