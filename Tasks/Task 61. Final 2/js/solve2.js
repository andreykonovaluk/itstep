//2. Дан полный путь к файлу (например, "D:\ITStep\itstep2\Tasks\Task 61. Practice\task.txt"). Вывести количество папок, которые входят в заданный путь.

let str = "D:\\ITStep\\itstep2\\Tasks\\Task 61. Practice\\task.txt";
let arr = str.split('\\');
let count = 0;

arr.forEach((item, index, array) => {
    if(index != 0 && index != array.length - 1){
        count++;
    }
});

console.log(count);
