const sin = Math.sin;
const cos = Math.cos;
const theta = Math.PI/4;
const zoom = 2;
const offset = [1, -3];


const pipeline = [
    function rotete(p) {
        return {
            x: p.x * cos(theta) - p.y * sin(theta),
            y: p.x * cos(theta) + p.y * sin(theta),
        };
    },

    function scale(p) {
        return {x: p.x * zoom, y: p.y * zoom};
    },

    function translate(p) {
        return {x: p.x + offset[0], y: p.y + offset[1]};
    }
];

const p = {x: 1, y: 1};
console.log(p);

let p2 = p;
for(let i = 0; i < pipeline.length; i++) {
    p2 = pipeline[i](p2);
    console.log(p2);
}

/**
 * パイプライン処理
 * 配列に関数を格納して、forで回すことで一気に複数の処理を行う
 * 画像・音声の処理に活用されている
 */