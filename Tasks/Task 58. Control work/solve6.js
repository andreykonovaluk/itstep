//6. Создать массив на 100 элементов и заполнить его случайными числами. Найти разницу между максимальным и мнимальными элементами.

let array = [];
const min = 50, max = 100, n = 100;

for (let i = 0; i < n; i++) {
    array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(array);

let maxElement = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] > maxElement) {
        maxElement = array[i];
    }
}

let minElement = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] < minElement) {
        minElement = array[i];
    }
}

console.log(maxElement - minElement);