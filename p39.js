// symbolにはdescriptionを追加すること
const RED = Symbol('test for red');
const BLUE = Symbol('test for blue');
const ORANGE = Symbol('test for orange');

console.log(RED);
console.log(BLUE);
console.log(ORANGE);

console.log(RED === BLUE);
console.log(RED === ORANGE);
