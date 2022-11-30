/*6. Дан массив [1,3,6,4,3,3,5,6]. Найти все значения, которые больше 
среднего арифметического значения всех элементов массива.*/

let a = [1, 3, 6, 4, 3, 3, 5, 6];
let sum = a.reduce((a, b) => a + b, 0) / a.length;
let b = a.filter((item) => item > sum);
console.log(sum);
console.log(b);
