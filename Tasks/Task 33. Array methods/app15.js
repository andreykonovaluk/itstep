/*forEach:
15. Дан массив с числами. Найдите сумму этих чисел.
*/

const a = [1, 2, 3, 4, 5];
let sum = 0;
console.log(a);
a.forEach(function (item) {
    sum += item;
});
console.log(a);
console.log(sum);