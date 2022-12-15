/*Задание #1
а) Создайте класс Phone, который содержит поля number, model и weight.
б) Добавить конструктор в класс Phone, который принимает на вход три параметра для 
    инициализации переменных класса - number, model и weight.
в) Создайте три экземпляра этого класса.
г) Выведите на консоль значения их переменных.
д) Добавить в класс Phone методы: receiveCall, имеет один параметр – имя звонящего.
    Выводит на консоль сообщение “Звонит { name }”. getNumber – возвращает номер телефона.
    Вызвать эти методы для каждого из объектов.*/

class Phone{
    number;
    model;
    weight;

    constructor(number, model, weight){
        this.number = number;
        this.model = model;
        this.weight = weight;
    }

    receiveCall(name){
        console.log(`Звонит ${name}`);
    }
    getNumber(number){
        return this.number;
    }
}
let user = new Phone('+375291111111', 'Samsung', '119');
let otherUser = new Phone('+375332222222', 'IPhone', '124');
let anotherUser = new Phone('+375293333333', 'Alcatel', '149');
console.log(user, otherUser, anotherUser);
user.receiveCall('Петя');
console.log(user.getNumber());
otherUser.receiveCall('Вася');
console.log(otherUser.getNumber());
anotherUser.receiveCall("Андрей");
console.log(anotherUser.getNumber());