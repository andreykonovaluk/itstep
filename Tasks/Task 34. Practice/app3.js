/*Дан числовой массив. Сформировать два новых массива: в первом - элементы с четными индексами, 
во втором - элементы с нечетными индексами. Сравнить суммы полученных массивов (определить большую).
*/

const a = [-1, 2, -3, 0, -4, 25, -6, 100];
console.log(a);
b = [];
c = [];
let firstArraySum = a.map(function (item, i) {
    if (i % 2 == 0) {
        return a[i];
    }
    
});
console.log(a, firstArraySum);
    

let secondArraySum = a.filter((item) => item < 0)
    .reduce((sum, item) => sum + item, 0);
console.log(firstArraySum);

--