/*Сделайте функцию, которая принимает параметром число от 1 до 7, 
а возвращает день недели на русском языке.*/
let day;
function dayOfTheWeek(day){
    if (day == 1){
        day = 'Понедельник';
    } else if (day == 2) {
        day = 'Вторник';
    } else if (day == 3) {
        day = 'Среда';
    } else if (day == 4) {
        day = 'Четверг';
    } else if (day == 5) {
        day = 'Пятница';
    } else if (day == 6) {
        day = 'Суббота';
    } else if (day == 7) {
        day = 'Воскресенье';
    }

    return day;
}
dayOfTheWeek(day);
console.log(dayOfTheWeek(3));