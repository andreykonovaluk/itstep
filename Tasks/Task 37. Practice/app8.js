/*8. Дано натурально число. Получить число, 
которое образуется из записи цифр данного в обратном порядке.*/

let num = 123;
array = [];
num = num.toString()
         .split('')
         .reverse()
         .join('');
console.log(num);