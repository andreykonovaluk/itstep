//7. Дано 2 массива. Проверить, можно ли один массив путем перестановки элементов получить из второго массива.(проверка на одни и те же элементы)

let arr1 = [2, 3, 4, 5];
let arr2 = [5, 8, 9 ,7 ,4 ,2, 3 ,1];
let arr3 = [];
console.log(arr1);
console.log(arr2);

arr1.sort();
arr2.sort();
console.log(arr1);
console.log(arr2);

arr1.forEach((item) => {
    if(arr2.includes(item)){
        arr3.push(item);
    } else {
        console.log("Нельзя получить один массив путем перестановки элементов из второго массива");
    }
});
console.log(arr3); 
    
if (arr3.length == arr1.length) {
    let isEqual = arr3.every((item, index) => {
        return arr3[index] == arr1[index];
    });
    if (isEqual) {
        console.log("Можно получить один массив путем перестановки элементов из второго массива");
    } else {
        console.log("Нельзя получить один массив путем перестановки элементов из второго массива");
    }
}