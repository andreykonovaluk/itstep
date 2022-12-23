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

class Client extends Person{

    address;
    payment;
    constructor(fullName, age, address, payment){
        super(fullName, age);
        this.address = address;
        this.payment = payment;
    }
    toString() {
        return `FullName: ${this.fullName}, Age: ${this.age}, Address: ${this.address}, Payment: ${this.payment}`;
    }
}

class Driver extends Person{

    experience;
    
    constructor(fullName, age, experience){
        super(fullName, age);
        this.experience = experience;
        
    }
    toString() {
        return `FullName: ${this.fullName}, Age: ${this.age}, Водительский стаж: ${this.experience}`;
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
        return `Car marka: ${ this.marka }, with engine: ${ this.engine.toString() }, car class: ${ this.carClass }, driver: ${ this.driver }`;
    }
}

class Taxi extends Car{

    tariff;

    constructor(carClass, engine, driver, marka, tariff) {
        super(carClass, engine, driver, marka);
        this.tariff = tariff;
    }
    toString(){
        return `Car marka: ${this.marka}, with engine: ${this.engine.toString()}, car class: ${this.carClass}, driver: ${this.driver}, tarif: ${this.tariff}`;
    }
}

class Lorry extends Car{

    carrying;

    constructor(carClass, engine, driver, marka, carrying) {
        super(carClass, marka, engine, driver)
        this.carrying = carrying;
    }
    toString() {
        return `Car marka: ${this.marka}, with engine: ${this.engine}, car class: ${this.carClass}, driver: ${this.driver }, Carrying lorry: ${this.carrying}`;
    }
}

class SportCar extends Car{

    speed;

    constructor(carClass, engine, driver, marka, speed) {
        super(carClass, marka, engine, driver);
        this.speed = speed;
    }

    toString() {
        return `Car marka: ${this.marka}, driver: ${this.driver }, top speed: ${this.speed}`;
    }
}

class Order {

    distance;
    taxi;
    client;

    constructor(distance, taxi, client){
        this.distance = distance;
        this.taxi = taxi;
        this.client = client;
    }
    getPrice() {
        return (this.distance * this.taxi.tariff);
    }

    toString(){
        return `Расстояние: ${this.distance}, Taxi: ${this.taxi.toString()}, Клиент: ${this.client.toString()}, Цена поездки: ${this.getPrice()}`;
    }
}

let engineAudi = new Engine("210 л.с.", "Audi Motors");
let engineVW = new Engine("240 л.с.", "Volkswagen Group");
console.log(engineAudi);
console.log(engineVW);
console.log(engineAudi.toString());
console.log(engineVW.toString());

peter = new Driver("Иванов Петр Петрович", "41 год", "9 лет");
ivan = new Driver("Петров Иван Иванович", "47 лет", "4 года");
console.log(peter);
console.log(ivan);
console.log(peter.toString());
console.log(ivan.toString());

let lorry = new Lorry("Грузовик", engineAudi, peter, "Audi",  "20 тонн");
console.log(lorry);
console.log(lorry.toString());

let sportCar = new SportCar("Спорткар", engineVW, ivan, "Volkswagen", "320 км/ч");
console.log(sportCar);
console.log(sportCar.toString());

//fullName, age, address, payment
let client = new Client("Сидоров Семен Семенович", "27 лет", "Пр-т Черняховского д.27а", "Наличные");
console.log(client);
console.log(client.toString());

//carClass, engine, driver, marka, tariff
let taxi = new Taxi("седан", engineVW, peter, "Volkswagen Polo", 3.3);
console.log(taxi);
console.log(taxi.toString());

//distance, taxi, client
let order = new Order(5.6, taxi, client);
console.log(order);
console.log(order.getPrice());
console.log(order.toString());