/*8. Напишите функцию, которая выводит в консоль числа от 1 до n, где n — целое число, которое функция принимает в качестве параметра, при этом:
 - выводит fizz вместо чисел, кратных 3;
 - выводит buzz вместо чисел, кратных 5;
 - выводит fizzbuzz вместо чисел, кратных и 3, и 5.
 */

var i = 1
function outputOfNumbers(n){
    
    for(let i = 1;i <= n; i++){
        if ((i % 3 == 0) && (i % 5 == 0)) {
            console.log("fizzbuzz");
        } else if (i % 3 == 0) {
            console.log("fizz");
        } else if (i % 5 == 0) {
            console.log("buzz");
        } else {
        console.log(i);
        }
    }
    
}
outputOfNumbers(30);
