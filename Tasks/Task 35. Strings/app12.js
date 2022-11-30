//Преобразуйте первую букву строки в верхний регистр.

let str = 'я учу javascript!';
str = str[0].toUpperCase() + str.slice(1);
console.log(str);