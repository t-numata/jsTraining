function getSentence({ subject, verb, object }) {
    return `${subject} ${verb} ${object}`;
}

const o = {
    subject: 'I',
    verb: 'love',
    object: 'you',
};

console.log(getSentence(o));
/**
 * 分割代入を使えば、一気に変数への代入が可能
 * 配列でも同じことができる
 */
