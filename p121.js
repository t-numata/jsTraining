const quill = { name: 'Quill' };
const steve = { name: 'Steve' };

function update(team, heroname) {
    this.team = team;
    this.heroname = heroname;
}

const updateQuill = update.bind(quill);

console.log(quill);
updateQuill('GotG', 'StarLoad');
console.log(quill);

console.log(quill);
updateQuill('GotG', 'StarLoad');
console.log(quill);

console.log(steve);
updateQuill.call(steve, 'Avengers', 'Captain America');
console.log(steve);
console.log(quill);

/**
 * bindではthisの内容を永続的に固定する
 * 上記の場合、updateQuillのthisはquillオブジェクトに固定されているため、
 * updateQuill.call(steve, "Avengers", "Captain America");
 * にてsteveを指定することができず
 * quilがAvengers Captain Americaとなる
 */
