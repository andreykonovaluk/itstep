//Разработать функцию, которая проверят наличие некоторого элемента в массиве.
function generationRandomIntegerNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function fillRandomArray(a, n) {
    for (i = 0; i < n; i++) {
        a[i] = generationRandomIntegerNumber(1, 10);
    }
}


function searchElementX(x) {
    isFind = false;
    for(i = 0; i < a.length; i++){
        if(a[i] == x){
            isFind = true;
            break;
        }
    }
    return isFind;
}


let a = [];
fillRandomArray(a, 10);
console.log(a);

searchElementX(10);
if (isFind == true) {
    console.log('Число x найдено');
}
else {
    console.log('Число x не найдено');
}
