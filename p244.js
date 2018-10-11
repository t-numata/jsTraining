function countdown(seconds) {
    return new Promise((onFulfilled, onRejected) => {
        const timeoutIds = [];
        for (let i = seconds; i >= 0; i--) {
            timeoutIds.push(
                setTimeout(() => {
                    if (i === 13) {
                        timeoutIds.forEach(clearTimeout);
                        return onRejected(
                            new Error(`${i}という数字は呪われています`)
                        );
                    }
                    if (i > 0) {
                        console.log(`${i}...`);
                    } else {
                        onFulfilled(console.log('GO'));
                    }
                }, (seconds - i) * 1000)
            );
        }
    });
}

function launch() {
    return new Promise((onFulfilled, onRejected) => {
        console.log('はっしゃ！');
        setTimeout(() => {
            onFulfilled('周回軌道に乗った!!');
        }, 2 * 1000);
    });
}

countdown(11)
    .then(launch)
    .then(msg => {
        console.log(msg);
    })
    .catch(err => {
        console.error(`メーデーメーデーこちらトラブル発生${err}`);
    });

/**
 * プロミスのチェイニング
 * プロミス成功後に別の関数を起動できる
 * もし途中でエラーが発生した場合は.catchで受け取ってくれる
 */
