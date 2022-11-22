/*Сделайте функцию, которая параметрами принимает 2 числа. 
Если их сумма больше 10 - пусть функция вернет true, а если нет - false.*/

function numberSumma(a, b) {
    let summa = a + b;
    if (summa > 10) {
        return true;
    }
    return false;
}
numberSumma(10, 5);
console.log(numberSumma(10, 5));