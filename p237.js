function countdown(seconds) {
    return new Promise(
        function (onFulfilled, onRejected) {
            for(let i = seconds; i >= 0; i--) {
                setTimeout(function() {
                    if (i === 13) return onRejected(new Error('数字が呪われている'));
                    if(i > 0) console.log(i + '...');
                    else onFulfilled(console.log('GO'));
                }, (seconds - 1 ) * 1000);
            }
        });
}
countdown(15).then(
    function() {
        console.log('カウントダウン成功！');
    },
    function (err) {
        console.log('カウントダウンエラー発生' + err.message);
    }
);

/**
 * promiseとthenの使い方
 */