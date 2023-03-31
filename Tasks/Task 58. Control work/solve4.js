//Написать функцию, принимающую в аргументах массив и возвращающую новый массив, в котором отсортированы все нечетные числа по возрастанию, четные числа по убыванию, но при этом сами чётные и нечетные числа остаются на своих местах. ([7, 3, 4, 9, 5, 2, 17] -> [3, 5, 2, 7, 9, 4, 17]).

function sorting(array) {
    let evenNumbers = array.filter((num) => (num % 2 == 0)).sort((a, b) => b - a);
    let oddNumbers = array.filter((num) => (num % 2 == 1)).sort((a, b) => a - b);
    
    let result = [];

    array.forEach(num => {
        if (num % 2 == 1) {
            result.push(oddNumbers.shift())
        }
        else {
            result.push(evenNumbers.shift())
        }
    });
    return result;
};

let array = [7, 3, 4, 9, 5, 2, 17];

console.log(array);
console.log(sorting(array));