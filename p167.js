class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this._userGears = [`P`, `N`, 'R', 'D'];
        this._userGear = this._userGears[0];
    }

    shift(gear) {
        this.userGear = gear;
    }

    get userGear() {
        return this._userGear;
    }

    set userGear(value) {
        if (this._userGears.indexOf(value) < 0) {
            throw new Error(`ギア指定が正しくない: ${gear}`);
        }
        this._userGear = value;
    }
}

const car1 = new Car('Tesla', 'Model S');
const car2 = new Car('Mazda', '3i');

console.log(car1);
console.log(car2);

car1.shift('D');
car1.shift('R');

console.log(car1.userGear);
console.log(car2.userGear);

car1.shift('X');

/**
 * アクセッサプロパティ
 * この場合userGearの読み書きを行うことができる
 * class内では_userGearが値を保持している
 */
