//Дан массив из n элементов и некоторое число x.Проверить наличие числа x в массиве.

const min = 1, max = 100, n = 21, k = 2;
a = [];
let x = 20;
for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;

}
console.log(a);
for(i = 0; i < a.length; i++){
    if(a[i] == x){
        console.log('число', x, 'есть в массиве, под номером', i);
    } /*else if (a[i] != x) {
        console.log('числа', x, ' нет в массиве, под номером');
    }*/
}
