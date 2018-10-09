const o = {
    name:  "Alucard",
    greetbackwards() {
        const self = this;
        function getReverseName() {
            let nameBackwards = "";
            for (let i=self.name.length-1; i>=0; i--) {
                nameBackwards += self.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym ,olleH`
    }
}

console.log(o.greetbackwards());

/**
 * const self = this;
 * こいつでthisの値を保持することで、oにバインドされたthisを関数内で参照できるようになる
 */