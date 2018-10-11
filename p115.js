const o = {
    name: 'Alucard',
    greetbackwards() {
        function getReverseName() {
            let nameBackwards = '';
            for (let i = this.name.length - 1; i >= 0; i -= 1) {
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym ,olleH`;
    },
};

console.log(o.greetbackwards());

/**
 * これは動作しない
 * o.greetbackwards()を呼び出すときにJavaScriptはthisをoにバインドするため
 */
