//Дан массив из n элементов.Вывести сумму максимального и минимального элемента.
const min = 1, max = 100, n = 21, k = 2;
let a = [], sum = 0;
for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(a);

let maxElement = a[0];
for (let i = 1; i < a.length; i++) {
    if (a[i] > maxElement) {
        maxElement = a[i];
    }
}
console.log("Максимальный элемент равен " + maxElement);

let minElement = a[0];
for (let i = 1; i < a.length; i++) {
    if (a[i] < minElement) {
        minElement = a[i];
    }
}
console.log("Минимальный элемент равен " + minElement);

sum = minElement + maxElement;
console.log("сумма minЭлемента и maxЭлемента, равна", sum);