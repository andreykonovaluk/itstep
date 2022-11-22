/*reduce, reduceRight:
21. Дан массив с числами. Найдите сумму последних N элементов до первого нуля с конца. 
Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем последние 3 элемента, так как дальше стоит элемент с числом 0. 
*/

const a = [1, 2, 3, 0, 4, 5, 6];
console.log(a);
answer = 0;
result = a.reduceRight(function (sum, elem) {
    if (elem == 0) {
        answer = sum;
    } else {
        return sum + elem;
    }
});
if (answer == undefined) {
    answer = result
};
console.log(answer);