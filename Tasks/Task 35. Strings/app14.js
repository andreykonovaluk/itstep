/*Преобразуйте строку 'var_test_text' в 'varTestText'. 
Скрипт, конечно же, должен работать с любыми аналогичными строками.
*/

let str = 'var_test_text';
console.log(str);
str = str.split('_')
         .map((item, index) => {
            if (index != 0)
                return item[0].toUpperCase() + item.slice(1)
            return item;
}).join('');
console.log(str);