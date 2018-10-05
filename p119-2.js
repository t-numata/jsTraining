const quill = {name: "Quill"};
const steve = {name: "Steve"};

function update(team, heroname) {
    this.team = team;
    this.heroname = heroname;
}



console.log(quill);
update.call(quill, "GotG", "StarLoad");
console.log(quill);


console.log(steve);
update.call(steve, "Avengers", "Captain Americas");
console.log(steve);


/**
 * callはオブジェクトの内容の更新にも使える
 * 第一引数がthisに固定する値、その後が関数にわたす引数
 */