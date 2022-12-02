/*Дано полный путь к файлу (например, "D:\ITStep\itstep2\Tasks\Task 37. Practice\task.txt"). 
Вывести все названия папок, которые входят в заданный путь.*/

let str = "D:\\ITStep\\itstep2\\Tasks\\Task 37. Practice\\task.txt";
let array = str.split("\\");
array.forEach((item) => console.log(item));
