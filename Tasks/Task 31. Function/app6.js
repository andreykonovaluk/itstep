//Разработать функцию, которая уменьшает четные элементы в 2 раза.

function generationRandomIntegerNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function fillRandomArray(a, n) {
    for (i = 0; i < n; i++) {
        a[i] = generationRandomIntegerNumber(1, 100);
    }
}


function decreaseEvenElementInTwo (a) {
    for(i = 0; i < a.length; i++){
        if(a[i] % 2 == 0){
            a[i] = a[i] / 2;
        }
    }
    return a;
}

let a = [];
fillRandomArray(a, 10);
console.log(a);
console.log(decreaseEvenElementInTwo(a));