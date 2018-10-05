const o = {
    name: "Groot",
    speak() {
        return `I am ${this.name} `;
    },
};

const speak = o.speak;

console.log(speak === o.speak);
console.log(speak());
console.log(o.speak());

/**
 * 定数speakはo.spark()の関数を指すしている。
 * そのため、spark === o.sparkはtrueとなる
 * ただし、spark()単体では、thisがどのオブジェクトを指しているかわからなくなる
 * そのため、speak()ではthis.nameを参照できずにundefinedになってしまう
 */