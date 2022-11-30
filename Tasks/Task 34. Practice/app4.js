//Дан числовой массив. Найти максимальный элемент массива.

const a = [-1, 2, -3, 0, -4, 25, -6, 100];
console.log(a);
let maxElem = Math.max.apply(null, a);
console.log(maxElem);