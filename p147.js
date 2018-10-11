class Person {
    constructor(name) {
        this.name = name;
        this.id = Person.nextId++;
    }
}

Person.nextId = 0;
const tony = new Person('Tony Stark');
const steve = new Person('Steve Rodgers');
const quill = new Person('Peter Quill');
const peter = new Person('Peter Paker');
const arr = [tony, steve, quill, peter];

// tonyのidで検索
console.log(arr.find(p => p.id === tony.id));
// thisをsteveに指定する場合
console.log(
    arr.find(function(p) {
        return p.id === this.id;
    }, steve)
);

/**
 * findで条件を関数で指定したい場合
 */
