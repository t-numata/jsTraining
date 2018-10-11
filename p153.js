const arr = [5, 7, 2, 4];
const sumFunction = (accumulator, currentValue) => accumulator + currentValue;

const sum = arr.reduce(sumFunction, 0);
console.log(sum);

const sum2 = arr.reduce(sumFunction, 100);
console.log(sum2);

/**
 * 処理の流れとしては以下の通り
 * 無名関数のa と xが渡される
 * aは前回の結果 (初期値は第2引数で決定)
 * xは配列の要素
 * すべての要素に対して無名関数の処理を順に行い
 * 最終的な結果を返す
 */
