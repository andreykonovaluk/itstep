/*Дан массив из n элементов и число k<n. Удалить элемент с номером k 
и сдвинуть на одну позицию влево все элементы, следующие за ним.*/

const min = 1, max = 100, n = 21, k = 2;
a = [];
for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;

}
console.log(a);