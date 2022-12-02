//4. Проверить 2 массива на полное совпадение.

let a = [1, 2, 3];
let b = [1, 2, 3];

if (a.length == b.length) {
    let isEqual = a.every((item, index) => item == b[index]);
    if (isEqual == true) {
        console.log("совпадают");
    } else {
        console.log("не совпадают");
    }
} else {
    console.log("не совпадают");
}