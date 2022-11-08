/*Дан массив из n элементов. Создать 2 новых массива. 
В 1 первый записать все элементы с четными индексами, во 2 - с нечетными.
*/

const min = 1, max = 100, n = 21, k = 2;
a = [];
b = [];
c = [];
for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;

}
console.log(a);


    for (let i = 0; i < a.length; i++){
        if (i % 2 == 0) {
            b[i/2] = a[i];
        } 
    }
    for (let i = 0; i < a.length; i++){
        if (i % 2 != 0) {
            c[(i-1) / 2] = a[i];
        } 
    }

console.log(b);
console.log(c);
