//Дано предложение.Проверить, есть ли в этом предложение заданное слово.

str = "Мама мыла раму";
let findWord = "Мама";

let isFind = str.toLowerCase().split(" ").includes(findWord.toLowerCase());

console.log(isFind);
