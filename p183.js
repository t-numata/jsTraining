const u1 = { name: 'Stark' };
const u2 = { name: 'Bruce' };
const u3 = { name: 'Peter' };
const u4 = { name: 'Quil' };
const u5 = { name: 'Clark' };

const Comics = new Map([
    [u1, 'Marvel'],
    [u2, 'DC'],
    [u3, 'Marvel']
]);

console.log(Comics.get(u2));

Comics.set(u4, 'Marvel');
Comics.set(u5, 'DC');

console.log(Comics.size);
console.log(Comics.keys());
console.log(Comics.values());
console.log(Comics.entries());

/**
 * ES2016から追加されたマップについて
 */