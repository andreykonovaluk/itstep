//Дана строка. Поделить строку на фрагменты по 3 символа в каждой.

let str = 'Пинаколада';
console.log(str);
let sectionCount = 4;

let sectionLength = Math.ceil(str.length / sectionCount);
let array = [];

for (let i = 0; i < str.length; i += sectionLength)
    array.push(str.slice(i, i + sectionLength));

console.log(array);