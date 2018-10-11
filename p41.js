const obj = {};

obj.color = '黄色';
obj['not an idenrifire'] = 3;

const SIZE = Symbol();
obj[SIZE] = 8;
console.log(obj[SIZE]);
obj.SIZE = 12;
console.log(obj.SIZE);
console.log(obj);
