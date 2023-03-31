//7. Данно 2 массива с целыми числами. Написать функцию, которая возвращает массив элементов, которые входят в оба массива без повторений. 

function sortedArray(arr1, arr2){

    let result = [];
    let unique1 = [];
    let unique2 = [];

    array1.forEach(function (item) {
        if (!unique1.includes(item)){
            unique1.push(item);
        }
    });

    array2.forEach(function (item) {
        if (!unique2.includes(item)){
            unique2.push(item);
        }
    });

    unique1.forEach(item => {
        if (unique2.includes(item)) {
            result.push(item);
        }
    });

    return result;
}

let array1 = [1, 3, 4, 6, 2, 2, 1, 3];
let array2 = [1, 6, 2, 1, 3];

console.log(sortedArray(array1, array2));