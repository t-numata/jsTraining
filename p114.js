const o = {
    name: 'Groot',
    speak() {
        return `I am ${this.name} `;
    },
};

const o2 = {
    name: 'Steve',
    speak() {
        return `I'm ${this.name}`;
    },
};

console.log(o);
console.log(o2);

console.log(o.speak());
console.log(o2.speak());

/**
 * thisはそのメソッドがプロパティとなっているオブジェクト自身を指す
 * o.speak()におけるthisはo
 * o2.speak()におけるthisはo2となる
 */
