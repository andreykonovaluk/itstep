//Даны 2 слова. Проверить, состоят ли они из одних и тех же букв.

let str1 = "Кот";
let str2 = "Ток";

let newStr1 = str1.toLowerCase()
                  .split("")
                  .sort()
                  .join("");
let newStr2 = str2.toLowerCase()
                  .split("")
                  .sort()
                  .join("");

if (newStr1 == newStr2) {
    console.log("Состоят из одних и тех же букв");
} else {
    console.log("Не состоят из одних и тех же букв");
}