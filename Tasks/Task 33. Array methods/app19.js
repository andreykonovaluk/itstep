/*reduce, reduceRight:
19. Дан массив с числами. Найдите сумму этих чисел.
*/

const a = [1, 2, 3, 4, 5];
console.log(a);
sum = 0;
let b = a.reduce(function(a, b){
    sum = a + b;
    return sum;
});
console.log(b);