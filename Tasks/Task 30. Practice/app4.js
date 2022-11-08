//Дан массив из n элементов. Поменять максимальный и минимальный элементы местами.
const min = 1, max = 100, n = 21, k = 2;
let a = [], sum = 0;
for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(a);

let maxIndex = 0;
for (let i = 1; i < a.length; i++) {
    if (a[i] > a[maxIndex]) {
        maxIndex = i;
    }
}
console.log("Максимальный элемент равен " + maxIndex);

let minIndex = 0;
for (let i = 1; i < a.length; i++) {
    if (a[i] < a[minIndex]) {
        minIndex = i;
    }
}
console.log("Минимальный элемент равен " + minIndex);
box = a[minIndex];
a[minIndex] = a[maxIndex];
a[maxIndex] = box;
console.log(a);