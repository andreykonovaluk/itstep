/*Дана строка, состоящее из слов между которыми может быть больше одного пробела.
Удалить все лишние пробелы, т.е.оставить по 1 пробелу между словами.*/

let str = '   мама     мыла  раму        ';
console.log(str);

 str = str.split(' ')
          .filter((item) => item)
          .join(' ');

console.log(str);