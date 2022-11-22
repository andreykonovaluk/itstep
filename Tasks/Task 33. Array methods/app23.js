/*reduce, reduceRight:
23. Дан массив с числами. Узнайте сколько элементов с конца массива надо сложить, 
чтобы в сумме получилось больше 10-ти. 
*/

const a = [1, 2, 3, 0, 4, 5, 6];
console.log(a);
num = 1;
result = a.reduceRight(function (sum, elem) {
    if (sum > 10) {
        console.log(num);
    } else {
        num++;
        return sum + elem;
    }
});