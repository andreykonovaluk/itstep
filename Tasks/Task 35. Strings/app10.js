//В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.

let date = '2025-12-31';

console.log(date);
date = date.split('-')
           .reverse()
           .join('.');

console.log(date);