//4. Проверить 2 массива на полное совпадение.

let a = [1, 2, 3, 2];
let b = [1, 2, 3, 1];

if (a.length == b.length) {
    let isEqual = a.every(function (item, index) {
        return item == b[index];
    });
    if (isEqual == true) {
        console.log("совпадают");
    } else {
        console.log("не совпадают");
    }
} else {
    console.log("не совпадают");
}