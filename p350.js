const exec = require('child_process').exec;

const command = 'ls';

exec(command, (err, stdout, stderr) => {
    if (err) return console.error(`実行エラー ${command}`);

    const stdoutString = stdout.toString();
    console.log(stdoutString);

    const stderrString = stderr.toString();
    if (stderr !== '') {
        console.error('error:');
        console.error(stderrString);
    }
});

/**
 * chiled_processモジュールのexec関数を呼び出す
 * execで呼び出したコマンドの結果をstdoutかstderr(エラー時)に格納する
 */
