class Engine{

    power;
    company;
    constructor(power, company){
        this.power = power;
        this.company = company;
    }

    toString(){
        return `Engine power: ${this.power}, Engine company: ${this.company}`;
    }
}

class Person{

    fullName;
    age;
    constructor(fullName, age){
        this.fullName = fullName;
        this.age = age;
    }
    toString() {
        return `fullName: ${this.fullName}, age: ${this.age}`;
    }
}

class Driver extends Person{

    experience;
    
    constructor(fullName, age, experience){
        super(fullName, age);
        this.experience = experience;
        
    }
    toString() {
        return `Водительский стаж: ${this.experience}`;
    }
}

class Car{

    carClass;
    engine;
    driver;
    marka;
    constructor(carClass, engine, driver, marka){
        this.carClass = carClass;
        this.engine = engine;
        this.marka = marka;
        this.driver = driver;
    }
    start(){
        return "Машина начала движение";
    }

    stop(){
        return "Машина закончила движение";
    }

    turnRight(){
        return"Машина повернула направо";
    }

    turnLeft(){
        return "Машина повернула налево";
    }

    toString(){
        return `Car marka: ${ this.marka }, with engine: ${ this.engine }, car class: ${ this.carClass }, driver: ${ this.driver }`;
    }
}

class Lorry extends Car{

    carrying;

    constructor(carClass, marka, engine, driver, carrying) {
        super(carClass, marka, engine, driver)
        this.carrying = carrying;
    }
    toString() {
        return `Carrying lorry: ${this.carrying}`;
    }
}

class SportCar extends Car{

    speed;

    constructor(carClass, marka, engine, driver, speed) {
        super(carClass, marka, engine, driver);
        this.speed = speed;
    }

    toString() {
        return `Top speed: ${this.speed}`;
    }
}

let engineAudi = new Engine("210 л.с.", "Audi Motors");
let engineVW = new Engine("240 л.с.", "Volkswagen Group");
console.log(engineAudi);
console.log(engineVW);
console.log(engineAudi.toString());
console.log(engineVW.toString());

let peter = new Person("Иванов Петр Петрович", "41 год");
let ivan = new Person("Петров Иван Иванович", "47 лет");
console.log(peter);
console.log(ivan);
console.log(peter.toString());
console.log(ivan.toString());

peterExperiense = new Driver("Иванов Петр Петрович", "41 год", "9 лет");
ivanExperiense = new Driver("Петров Иван Иванович", "47 лет", "4 года");
console.log(peterExperiense);
console.log(ivanExperiense);
console.log(peterExperiense.toString());
console.log(ivanExperiense.toString());

let car = new Car("Легковой автомобиль", "Бензин", "Водитель", "VW Polo");
console.log(car);
console.log(car.start());
console.log(car.stop());
console.log(car.turnLeft());
console.log(car.turnRight());
console.log(car.toString());

let lorry = new Lorry("Грузовик", "Дизель", "Опыт", "Mersedes",  "Насыпные грузы");
console.log(lorry);
console.log(lorry.toString());

let sportCar = new SportCar("Спорткар", "Audi", "710 л.с.", "Петров Иван Иванович", "320 км/ч");
console.log(sportCar);
console.log(sportCar.toString());