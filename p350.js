const exec = require("child_process").exec;

const command = "ls";

exec(command, function(err, stdout, stderr) {
    if(err) return console.error(`実行エラー ${command}`);

    stdout = stdout.toString();
    console.log(stdout);

    stderr = stderr.toString();
    if(stderr !== '') {
        console.error("error:");
        console.error(stderr);
    }
});

/**
 * chiled_processモジュールのexec関数を呼び出す
 * execで呼び出したコマンドの結果をstdoutかstderr(エラー時)に格納する
 */