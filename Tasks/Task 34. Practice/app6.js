//Дан числовой массив и некоторое число x. Удалить все элементы больше заданного числа x. 

const a = [-1, 2, -3, 0, -4, 25, -6, 100];
let x = 5;
console.log(a);

let b = a.filter((item) => item <= x);
console.log(a, b);