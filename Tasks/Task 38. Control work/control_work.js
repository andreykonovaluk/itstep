console.log("Task 1:");
//1. Дано число N.Получить массив квадратов чисел от 1 до N.

let N = 21;
let min = 1, max = N;
let a = [];
for (let i = 0; i < N; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(a);
a = a.map((item) => item * item);
console.log(a);



console.log("Task 2:");
/*2. Дан числовой массив. Что больше сумма положительных чисел или модуль суммы отрицательных чисел. 
(Модуль числа - значение числа без знака).*/

min = -50, max = 50;
a = [];
for (let i = 0; i < 10; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(a);
let sumPositiveNumbers = 0;
let sumNegativeNumbers = 0;
let result = 0;

for (let i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        sumPositiveNumbers += a[i];
    } else {
        sumNegativeNumbers = Math.abs(sumNegativeNumbers + a[i]);
    }

}

if (sumPositiveNumbers > sumNegativeNumbers){
    console.log('Больше сумма положительных чисел');
} else {
    console.log('Больше модуль суммы отрительных чисел');
}



console.log("Task 3:");
//3. Дан числовой массив. Удалить все нулевые элементы из массива.

a = [1, 2, 14, 0, 5, 7, 0, 0, 21, 0];
b = a.filter((item) => item != 0);
console.log(b);



console.log("Task 4:");
//4. Дан числовой массив. В массиве чисел найти два самых больших элемента, не используя функцию sort().

a = [1, 2, 14, 5, 7, 21];
let lastMaxElement = a[0];
for (let i = 1; i < a.length; i++) {
    if (a[i] > lastMaxElement) {
        lastMaxElement = a[i];
    }
}
let penultimateMaxElement = a[0];
for (let i = 1; i < a.length; i++) {
    if (a[i] > penultimateMaxElement && a[i] < lastMaxElement) {
        penultimateMaxElement = a[i];
    }
}
console.log("Последний максимальный элемент равен " + lastMaxElement);
console.log("Предпоследний максимальный элемент равен " + penultimateMaxElement);



console.log("Task 5:");
/*5. Дан числовой массив. Поменять максимальный и минимальный элемент местами. 
(максимальный и минимальный элементы не повторяются)*/

let maxIndex = 0;
for (let i = 1; i < a.length; i++) {
    if (a[i] > a[maxIndex]) {
        maxIndex = i;
    }
}

let minIndex = 0;
for (let i = 1; i < a.length; i++) {
    if (a[i] < a[minIndex]) {
        minIndex = i;
    }
}

let box = a[minIndex];
a[minIndex] = a[maxIndex];
a[maxIndex] = box;
console.log(a);



console.log("Task 6:");
/*6. Дан числовой массив. Вывести все элементы, которые больше предыдущего элемента.

a = [1, 2, 14, 5, 7, 21];
a.reduce((item) => a+b);
console.log(a);*/



console.log("Task 7:");
/*7. Дан числовой массив и 2 числа N, M, причем N < M. Найти все элементы, 
которые лежат в интервале от N до M.*/

a = [1, 2, 14, 5, 7, 21];
N = 2;
let M = 10;
b = a.filter((item) => item >=N && item <= M);
console.log(b);



console.log("Task 8:");
//8. Дано число. Получить новое число, состоящее из цифр данного числа, расставленных в порядке убывания.

let num = 123456;
num = num.toString().split('').reverse().join('');
console.log(num);



console.log("Task 9:");
//9. Дано дата в формате "день.месяц.год". Найти порядковый номер дня относительно начала года.

let data = "22.10.1990";
let arrayData = data.split('.');
//let day = arrayData[0], month = arrayData[1], year = arrayData[2];

let day = 22, month = 10, year = 1990;

console.log(arrayData);

let monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let numOfDay = 0;

if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    monthDay[1]++;
}
    for (let i = 0; i < (month - 1); i++){
        numOfDay += monthDay[i];
    }
numOfDay += day;

console.log(numOfDay);



console.log("Task 10:");
//10. Дан массив чисел. Найти число в массиве с наибольшим суммой цифр.

a = [1, 5, 31, 11, 121, 99, 54];



console.log("Task 11:");
//11. Дано предложение. Найти длину самого короткого слова.

let str = "мы все вместе учим JavaScript!"
let shortWord = str.split(' ').reduce((short, item) => {
    if (item.length < short.length) {
        return item;
    }
    else {
        return short;
    }
});

console.log(shortWord);



console.log("Task 12:");
//12. Даны 2 слова. Удалить из обоих слов буквы, которые встречаются в обоих словах.

let words = 'мама мыла';
let delLetters = words.toLocaleLowerCase().split('').filter((item, index) => {
    return words.indexOf(item) == index;
}
).join('');

console.log(delLetters);



console.log("Task 13:");
//13. Дано предложение. Вывести слова в предложение в порядке убывания.

str = "мы все вместе учим JavaScript!";
let newSentence = str.split(' ').sort((a, b) => b.length - a.length).join(" ");

console.log(newSentence);



console.log("Task 14:");
//14. Дано предложение. Вывести частоту стречаемости каждого символа в строке.



console.log("Task 15:");
/*15. Дано слова. Получить 2 новые строки, где 1 строка состоит из 
гласных букв слова в верхнем регистре, а вторая строка - из согласных в нижним регистре.*/

let word = 'Гипоталамус';
let vowels = 'уеыаоэяиюё';

let str1 = word.toLowerCase().split('').filter(item => {
    return vowels.indexOf(item) != -1;
}).join('').toUpperCase();

let str2 = word.toLowerCase().split('').filter(item => {
    return vowels.indexOf(item) == -1;
}).join('');

console.log(str1);
console.log(str2);



console.log("Task 16:");
//16. Дана строка. Подсчитать количество цифр встречающихся в строке.

let numbers = '0123456789';
str = 'Количество цифр встречающихся в строке 121, 2, 8, 17, 0, 81';

let countOfNumbers = str.split('').filter((item) => numbers.includes(item)).length;

console.log('Количество цифр встречающихся в строке -', countOfNumbers);



console.log("Task 17:");
//17. Дана строка.Вывести символы, которые в ней повторяются.



console.log("Task 18:");
//18. Дан числовой массив. Заменить каждый элемент массива с нечетным индексом на ноль.

a = [1, 2, 14, 5, 7, 21];
console.log(a);
a = a.map(function(item, index){
    if(index % 2 != 0){
        item = 0;
    }
    return item;
});

console.log(a);



console.log("Task 19:");
/*19. Дан числовой массив. Преобразовать массив так, 
чтобы сначала шли нулевые элементы, а затем все остальные.*/

a = [1, 2, 14, 0, 5, 7, 0, 21];

console.log(a);

let array = a.filter((item) => item != 0);
a = a.filter((item) => item == 0).concat(array);

console.log(a);



console.log("Task 20:");
/*20. Дан числовой массив. Найдите наименьший четный элемент массива. 
Если такого нет, то выведите первый элемент.*/

a = [1, 8, 14, 5, 22, 7, 21, 2];
console.log(a);

array = a.filter((item) => item % 2 == 0);

let minEvenElement = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] < minEvenElement) {
        minEvenElement = array[i];
    }
}

console.log(array);
console.log(minEvenElement);


