//Разработать функцию для нахождения индекса максимального элемента в массиве.
function generationRandomIntegerNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function fillRandomArray(a, n) {
    for (i = 0; i < n; i++) {
        a[i] = generationRandomIntegerNumber(1, 100);
    }
}


function searchMaxIndex(a) {
    let maxIndex = 0;
    for (let i = 1; i < a.length; i++) {
        if (a[i] > a[maxIndex]) {
            maxIndex = i;
        }
    }
    return maxIndex;
}


let a = [];
fillRandomArray(a, 10);
console.log(a);
let maximumIndex = searchMaxIndex(a);
console.log('Максимальный индекс элемента массива равен', maximumIndex);