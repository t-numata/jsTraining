const orignalObject = {
    name: 'Tony Stark',
    spoil() {
        return 'I am iron man';
    },
};

console.log(orignalObject);
console.log(orignalObject.spoil());

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
