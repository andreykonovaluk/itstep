/*reduce, reduceRight:
19. Дан массив с числами. Найдите сумму этих чисел.
*/

const a = [1, 2, 3, 4, 5];
console.log(a);

let sum = a.reduce(function(a, b){
    a + b;
    return a + b;
}, 0);
console.log(sum);