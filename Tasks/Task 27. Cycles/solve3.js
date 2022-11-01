//подсчитать кол-во простых делителей заданного числа
var n = 36;
var isPrime = true;
var j = 2;
for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
        isPrime = true;
        for (let j = 2; j < i; j++){
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i, " - Простое число");
        }
    }
}