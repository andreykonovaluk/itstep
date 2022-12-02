//Дано слово. Вывести набор букв, из которых состоит это слово без повторений.

str = "Мадагаскар";

let uniqueLetters = str.toLowerCase()
                       .split("")
                       .filter((item, index) => str.toLowerCase().indexOf(item) == index)
                       .join("");
console.log(uniqueLetters);
