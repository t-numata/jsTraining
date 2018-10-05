const quill = {name: "Quill"};
const steve = {name: "Steve"};

function update(team, heroname) {
    this.team = team;
    this.heroname = heroname;
}



console.log(quill);
update.apply(quill, ["GotG", "StarLoad"]);
console.log(quill);


console.log(steve);
update.apply(steve, ["Avengers", "Captain Americas"]);
console.log(steve);


/**
 * applyでは引数を配列として送ることができる
 * すでに存在する配列を送りたいときに利用する
 */