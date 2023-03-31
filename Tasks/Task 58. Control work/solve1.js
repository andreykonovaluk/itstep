//1. Написать функцию, принимающую в аргументах две строки и возвращающую true, если эти строки состоят из идентичных букв и false в противном случае.

function stringComparison(str1, str2){

    let newStr1 = str1.toLowerCase()
                      .split("")
                      .sort()
                      .join("");
    let newStr2 = str2.toLowerCase()
                      .split("")
                      .sort()
                      .join("");

    if (newStr1 == newStr2) {
        return true;
    } else {
        return false;
    }
}

console.log(stringComparison("Кот", "Ток"));