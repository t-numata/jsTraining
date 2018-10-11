const obj = {
    name: 'Tony Stark',
    spoil() {
        return 'I am iron man';
    },
};

console.log(obj);
console.log(obj.spoil());

const shorthandObj = {
    name: 'Tony Stark',
    spoil() {
        return 'I am iron man';
    },
};

console.log(shorthandObj);
console.log(shorthandObj.spoil());

/**
 * オブジェクト内のプロパティとして関数を瀬戸することができる
 * ショートハンドを使うとより短縮して書くことができる
 */
