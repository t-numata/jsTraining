let currentTempC = 25.5;
const message = "現在の温度は" + currentTempC + "℃です"

console.log(message);

// ちなみにこうした場合でも、結果はL4と同じになる
// 一度展開されちゃってから代入されてるからね。Bladeとかみたいにはいかない
currentTempC = 10.0;
console.log(message);
