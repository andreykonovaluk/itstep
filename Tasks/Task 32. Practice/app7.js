/*Сделайте функцию, которая параметром принимает целое число и проверяет: четное оно или нет. 
Если четное - пусть функция возвращает true, если нечетное - false.*/

function parityCheck(a) {
    if (a % 2 == 0) {
        return true;
    }
    return false;
}

parityCheck(22);
console.log(parityCheck(22));