/*Разработать функцию, которая ищет элемент в массиве и возвращает его индекс, 
если находит его, и -1 - в противном случае.*/
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