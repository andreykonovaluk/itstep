/*map:
16. Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.
*/
/*
const a = [1, 2, 3, 4, 5];
b = [];
console.log(a);
a.map(function (item) {
    b.push(item * item);
});
console.log(a);
console.log(b);


const a = [1, 2, 3, 4, 5];
const b = a.map((num) => num * num);
console.log(a);
console.log(b);
*/

const a = [1, 2, 3, 4, 5];
const b = a.map(function (item) {
    return item * item;
});
console.log(b);