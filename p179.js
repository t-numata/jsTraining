class Car {}

class InsurancePolicy {}

function makeInsurable(targetObject) {
    targetObject.addInsurancePolicy = policyObject => {
        this.InsurancePolicy = policyObject;
    };

    targetObject.getInsurancePolicy = () => this.InsurancePolicy;

    targetObject.isInsured = () => !!this.InsurancePolicy;
}

// Carクラスに対して関数を追加する。
makeInsurable(Car.prototype);

const car1 = new Car();
console.log(car1.isInsured());
car1.addInsurancePolicy(new InsurancePolicy());
console.log(car1.isInsured());

const car2 = new Car();
console.log(car2.isInsured());
car2.addInsurancePolicy(new InsurancePolicy());
console.log(car2.isInsured());

/**
 * Carクラスのprototypeに対してメソッドを追加することで
 * 以降呼び出される再にmakeInsurable内のプロパティが追加される
 */
