const g = function f(stop) {
    if (stop) {
        console.log('f stop');
    } else {
        console.log(`f is working`);
        f(true);
    }
}

g(false);
console.log('----');
g(true);

/**
 * gの引数は関数fに引数として渡される
 * L6では再帰呼び出しを行っている
 */