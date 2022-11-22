/*forEach:
14. Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел.
*/

const a = [1, 2, 3, 4, 5];
b = [];
console.log(a);
a.forEach(function(item){
    b.push(item * item);
});
console.log(a);
console.log(b);