/*1. Дан пустой массив, его размер n и некоторое значение value. 
Заполнить массив этим значением. (используя fill)*/

let a = [];
n = 5;
a.length = n;
value = 121;
a = a.fill(value, 0, n);
console.log(a);
