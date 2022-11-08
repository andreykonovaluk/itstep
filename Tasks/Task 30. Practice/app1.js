//Дан массив из n элементов и число k<n. Вывести последние k элементов массива.
const min = 1, max = 100, n = 21, k = 2;
let a = [], b = [];
for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(a);
for (let i = a.length - k; i < a.length; i++){
    console.log(a[i]);
}
