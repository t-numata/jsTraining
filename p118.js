const func1 = function() {
    return 'Hello';
};

const arrow1 = () => 'Hello';

const func2 = function(name) {
    return `Hello ${name}`;
};

const arrow2 = name => `Hello ${name}`;

const func3 = function(a, b) {
    return a + b;
};

const arrow3 = (a, b) => a + b;

console.log(func1());
console.log(arrow1());
console.log(func2('Takahiro'));
console.log(arrow2('Takahiro'));
console.log(func3(1, 2));
console.log(arrow3(1, 2));

/**
 * アロー演算子での省略について
 * それぞれ数字が一致するfuncとarrowは同じ挙動をする
 */
