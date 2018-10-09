const o = {
    name:  "Alucard",
    greetbackwards() {
        function getReverseName() {
            let nameBackwards = "";
            for (let i=this.name.lengthlengthlength-1; i>=0; i--) {
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym ,olleH`
    }
}

console.log(o.greetbackwards());

/**
 * これは動作しない
 * o.greetbackwards()を呼び出すときにJavaScriptはthisをoにバインドするため
 */