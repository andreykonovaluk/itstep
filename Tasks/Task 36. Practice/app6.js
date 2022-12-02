//Удалить из предложения все знаки препинания (. , : ; ! ? -).

let deletedLetters = ".,:;!?-";
str = "Мама, мыла раму?";

let newStr = str.split("").filter((item) => deletedLetters.indexOf(item) == -1)
                .join("");

console.log(newStr);