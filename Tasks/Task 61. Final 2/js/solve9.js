//9. Дано дата в формате "день.месяц.год". Вывести дату, которая будет через 10 дней.

let str = "22.10.1990";
let dateArr = str.split(".");
dateArr[1] = dateArr[1] - 1;   //т.к. месяца нумеруются от 0 до 11;
let date = dateArr.reverse().join(",");
let newDate = new Date(date);
newDate.setDate(newDate.getDate() + 10);
console.log(newDate);
