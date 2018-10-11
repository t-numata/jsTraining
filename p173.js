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

// prptotypeについて確認
console.log(car1.shift === Car.prototype.shift);
console.log(car2.shift === Car.prototype.shift);

// 新しいメソッドで上書き
car1.shift = gear => {
    this.userGear = gear.toUpperCase();
};

//
console.log(car1.shift === Car.prototype.shift);
console.log(car2.shift === Car.prototype.shift);

car1.shift('D');
car1.shift('R');

console.log(car1.userGear);
console.log(car2.userGear);

/**
 * 動的ディスパッチについて
 * プロトタイプの関数・プロパティを定義すると
 * プロトタイプの内容が更新される
 */
