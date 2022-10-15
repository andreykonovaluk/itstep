/*
//задача 1
var a, b, c;
a = (18 * 60 + 30)*60;
b = (21 * 60 + 20)*60;
c = b - a;
console.log(c);
//задача 2
var a = 3, b = 1, c, d, e;
c = (a + b) * 2;
d = a * b;
e = d / c;
console.log(e);
//задача 3
var a = 1000, b, c, d;
b = (a / 10) + a;
c = (b / 10) + b;
d = (c / 10) + c;
e = d - a;
console.log(e); */

//задание 1
var name = "Вася";
const surname = "Пупкин";
var height, weightC;
height = 180;
weightC = 0.89;
var weightKg;
weightKg = weightC * 100;
console.log("Меня зовут", name, surname, ".", "Я вешу", weightC, "ц.", "Мой рост -", height, "см.")
var weightKgO, heightO;
weightKgO = weightKg + 10;
heightO = height - 2;
console.log(name, surname, "потолстел и стоптался.");
var weightKgPeter, attitude;
name = "Петя";
weightKgPeter = (weightKgO + 10) * 2;
attitude = weightKgPeter / weightKg;
console.log("Теперь я", name, surname, "и вешу в", attitude, "больше, чем в молодости.");

//задание 2
var sideSquare = 5, p;
p = sideSquare*4;
console.log(p)

var r, s;
r = 10;
s = Math.PI * Math.pow(r, 2);
console.log(s);

var a = 3, b = 4, c;
c = (a**2 + b**2)**0.5;
console.log(c);

var variable1, variable2, variable3;
variable1 = 1;
variable2 = 2;
variable3 = variable2;
variable2 = variable1;
variable1 = variable3;
console.log(variable1, variable2)

var number = 123, number1, number2, number3, sum;
number1 = number * 0.1;
number2 = (number - number1) * 0.1
number3 = 
sum = number1 + number2 + number3;
console.log(sum)