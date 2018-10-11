const grootObject = {
    name: 'Groot',
    speak() {
        return `I am ${this.name} `;
    },
};

const steaveObject = {
    name: 'Steve',
    speak() {
        return `I'm ${this.name}`;
    },
};

console.log(grootObject);
console.log(steaveObject);

console.log(grootObject.speak());
console.log(steaveObject.speak());

/**
 * thisはそのメソッドがプロパティとなっているオブジェクト自身を指す
 * o.speak()におけるthisはo
 * steaveObject.speak()におけるthisはsteaveObjectとなる
 */
