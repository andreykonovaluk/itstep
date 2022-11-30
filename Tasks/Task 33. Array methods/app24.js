/*Комбинирование:
24. Дан массив с числами. Оставьте в нем только положительные числа. 
Затем извлеките квадратный корень и этих чисел.
*/

const a = [-1, 2, -3, 0, -4, 25, -6, 100];
console.log(a);
let filtered = a.filter(function (elem){
    return elem > 0;
});
console.log(filtered);

let res = filtered.map(function (elem){
    return Math.sqrt(elem);
});
console.log(res);
