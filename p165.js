class Car {}

const car1 = new Car();
const car2 = new Car();

console.log(car1 instanceof Car);
console.log(car2 instanceof Car);
console.log(car1 instanceof Array);

/**
 * instanceofで任意のクラスのインスタンスかどうかを判定できる
 * car1 car2はCarのインスタンスで
 * car1はArrayのインスタンスではない
 */
