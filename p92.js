// falseを返す値
if (undefined) {
    console.log("t");
} else {
    console.log("f");
}

if (null) {
    console.log("t");
} else {
    console.log("f");
}

if (0) {
    console.log("t");
} else {
    console.log("f");
}

if (NaN) {
    console.log("t");
} else {
    console.log("f");
}

if ('') {
    console.log("t");
} else {
    console.log("f");
}

// 混乱しがちな値 以下すべてtrueを返す
const obj1 = {};

if (obj1) {
    console.log("t");
} else {
    console.log("f");
}

const arr = [];

if (arr) {
    console.log("t");
} else {
    console.log("f");
}

if (' ') {
    console.log("t");    
} else {
    console.log("f");
}

if ('false') {
    console.log("t");
} else {
    console.log("f");
}