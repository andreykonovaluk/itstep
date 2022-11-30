//Дан числовой массив. Найти разность максимального и мининального элемента массива.

const a = [-1, 2, -3, 0, -4, 25, -6, 100];
console.log(a);

let maxElem = Math.max.apply(null, a);
console.log(maxElem);

let minElem = Math.min.apply(null, a);
console.log(minElem);

let diff = maxElem - minElem;
console.log(diff);