/*Дан числовой массив. Сформировать два новых массива: в первом - четные элементы массива, 
во втором - нечетные элементы. Сравнить суммы полученных массивов (определить большую).
*/

const a = [-1, 2, -3, 0, -4, 25, -6, 100];
console.log(a);

let firstArraySum = a.filter((item) => item % 2 == 0)
                  .reduce((sum, item) => sum + item, 0);

let secondArraySum = a.filter((item) => item % 2 == 1)
                   .reduce((sum, item) => sum + item, 0);
if (firstArraySum > secondArraySum){
    console.log("сумма значений первого массива больше");
} else if (firstArraySum < secondArraySum) {
    console.log("сумма значений второго массива больше");
} else {
    console.log("суммы значений первого и второго массивов равны");
}
