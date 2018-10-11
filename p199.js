const members = ['Stark', 'Steve', 'Peter', 'Quil', 'Hulk'];

const iteraterTest1 = members.values();
console.log(iteraterTest1.next());
console.log(iteraterTest1.next());
console.log(iteraterTest1.next());
console.log(iteraterTest1.next());
console.log(iteraterTest1.next());
console.log(iteraterTest1.next());

const iteraterTest2 = members.values();
let current = iteraterTest2.next();
while (!current.done) {
    console.log(current.value);
    current = iteraterTest2.next();
}

/**
 * イテレータの使い方
 */
