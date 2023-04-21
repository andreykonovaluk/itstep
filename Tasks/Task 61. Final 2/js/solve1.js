//1. Дано натурально число. Получить число, которое образуется из записи цифр данного в обратном порядке.

let number = 123456;
let reverseNumber = number.toString()
                          .split('')
                          .reverse()
                          .join('');
console.log(number);
console.log(reverseNumber);