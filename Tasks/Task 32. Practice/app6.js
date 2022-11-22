/*Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. 
Если отрицательное - пусть функция вернет true, а если нет - false.*/

function checkingNumber(a){
    if (a < 0) {
        return true;
    }
    return false;
}

checkingNumber(-1);
console.log(checkingNumber(-1));