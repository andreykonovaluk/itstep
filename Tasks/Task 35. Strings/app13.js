//Преобразуйте первую букву каждого слова строки в верхний регистр.

let str = 'я учу javascript!';
str = str.split(" ")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");

console.log(str);