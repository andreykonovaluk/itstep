//Сделайте функцию, которая параметром принимает число и возвращает массив его делителей

function isPrime(n) {
    for (let i = 2; i <= Math.floor(Math.sqrt(n)) + 1; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}


function getPrimeDivisors(n) {
    for (let j = 1; j < n; j++) {
        if (n % j == 0 && isPrime(j)) {
            console.log(j);
            
        }
    }
}

function countPrimeDivisors(n){
    for (let j = 1; j < n; j++) {
        if (n % j == 0 && isPrime(j)) {
            count++;
        }
    }
    
    return count;
}

function fillArrayOfDivisors(a){
    for (let k = 0; k < count; k++){
        a[k] = getPrimeDivisors(111);
        
    }
}

count = 0;
getPrimeDivisors(111);
a = [];
countPrimeDivisors(111);
console.log(count);
//fillArrayOfDivisors(a);
//console.log(fillArrayOfDivisors(a));

console.log(a);