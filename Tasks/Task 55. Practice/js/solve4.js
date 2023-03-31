//4. Дано поле ввода. В поле ввода вводятся чиcла через пробел. Сделать так, чтобы при наборе текста в поле выводилась сумма этих чисел.
let input = document.querySelector("input");

input.addEventListener("keyup", function(event){
    let str = input.value;
    let numbers = str.split(" ");
    let sum = numbers.reduce((sum, item) => {
        return sum + (+item);
    }, 0);
    document.querySelector(".result").innerHTML = sum;
});