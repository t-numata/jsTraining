const greetingObject = {
    name: 'Groot',
    speak() {
        return `I am ${this.name} `;
    },
};

const speak = greetingObject.speak;

console.log(speak === greetingObject.speak);
console.log(speak());
console.log(greetingObject.speak());

/**
 * 定数speakはgreetingObject.spark()の関数を指すしている。
 * そのため、spark === greetingObject.sparkはtrueとなる
 * ただし、spark()単体では、thisがどのオブジェクトを指しているかわからなくなる
 * そのため、speak()ではthis.nameを参照できずにundefinedになってしまう
 */
