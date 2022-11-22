/*Разработать функцию, которая выводит элемента массива через запятую 
([1,2,3,4,5] -> 1, 2, 3, 4, 5)*/
function generationRandomIntegerNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function fillRandomArray(a, n) {
    for (i = 0; i < n; i++) {
        a[i] = generationRandomIntegerNumber(1, 100);
    }
}


let a = [];
fillRandomArray(a, 10);
console.log(a);