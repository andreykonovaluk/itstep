//3. Напишите функцию, которая на вход получает произвольное количество аргументов и возвращает массив, состоящих только из уникальных значений параметров функции.

function unique(){
    let a = [];
    let unique = [];
    
    for (let i = 0; i < arguments.length; i++) {
        a.push(arguments[i]);
    }

    a.forEach(function (item) {
        if (!unique.includes(item))
            unique.push(item);
    })
    return unique;
}

let uniqueArray = unique(1, 3, 4, 6, 2, 2, 1, 3);

console.log(uniqueArray);
