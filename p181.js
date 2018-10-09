const ADD_POLICY = Symbol();
const GET_POLICY = Symbol();
const IS_INSURED = Symbol();
const _POLICY = Symbol();

class Car {
    constructor() {

    }
}

class InsurancePolicy {

}

function makeInsurable(obj) {
    obj[ADD_POLICY] = function (p) {
        this[_POLICY] = p;
    };

    obj[GET_POLICY] = function () {
        return this[_POLICY];
    }

    obj[IS_INSURED] = function () {
        return !!this[_POLICY];
    };
}
// Carクラスに対して関数を追加する。
makeInsurable(Car.prototype);

const car1 = new Car;

console.log(car1[IS_INSURED]());
car1[ADD_POLICY](new InsurancePolicy());
console.log(car1[IS_INSURED]());

const car2 = new Car;

console.log(car2[IS_INSURED]());
car2[ADD_POLICY](new InsurancePolicy());
console.log(car2[IS_INSURED]())

/**
 * ミックスインで関数名が重複すると、意図しない意図しない上書きが発生してしまう
 * Symbolは絶対にユニークになるので、これで意図しない上書きは発生しない
 */