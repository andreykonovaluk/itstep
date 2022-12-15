let Car = {
    model: 'rs6',
    brand: 'audi',
    fuel: 'gazoline',
    print(){
        console.log(this.brand, this.model);
    }
}
let auto = {
    contry: 'Germany',
    __proto__: Car,
    drive(){
        console.log("Страна производитель -", this.contry);
    }
}
let plain = {
    mover: 4,
    __proto__: 'Car',
    fly(){
        console.log("у меня", this.mover, "двигателя");
    }
}
let train = {
    cargo: 'Пассажирский',
    __proto__: Car,
    move(){
        console.log("Поезд", this.cargo);
    }
}
Car.print();
auto.drive();
plain.fly();
train.move();