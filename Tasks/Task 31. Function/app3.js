//Разработать функцию для нахождения максимального элемента в массиве.
function generationRandomIntegerNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function fillRandomArray(a, n) {
    for (i = 0; i < n; i++) {
        a[i] = generationRandomIntegerNumber(1, 100);
    }
}


function maxElement(a){
let maxElem = a[0];
for (let i = 1; i < a.length; i++) {
    if (a[i] > maxElem) {
        maxElem = a[i];
    }
}
return maxElem;
}


let a = [];
fillRandomArray(a, 10);
console.log(a);
let maximum = maxElement(a);
console.log('Максимальный элемент равен', maximum);