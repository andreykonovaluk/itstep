//7. Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!'.

let str = 'Я-учу-javascript!';
while (str.indexOf("-") != -1) {
    str = str.replace("-", "!");
}
console.log(str);
