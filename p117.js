const stopFunctionVal = function testFunction(stop) {
    if (stop) {
        console.log('testFunction stop');
    } else {
        console.log(`testFunction is working`);
        testFunction(true);
    }
};

stopFunctionVal(false);
console.log('----');
stopFunctionVal(true);

/**
 * gの引数は関数fに引数として渡される
 * L6では再帰呼び出しを行っている
 */
