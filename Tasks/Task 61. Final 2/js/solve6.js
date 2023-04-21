//6. Дано предложение. Найти самое короткое слово в предложении.

let sentence = "Сегодня хорошая погода за окном";
let arr = sentence.split(" ");
console.log(sentence);
console.log(arr);

let shotWord = arr[0];
for (let i = 1; i < arr.length; i++){
    if (arr[i].length < shotWord.length){
        shotWord = arr[i];
    }
}
console.log(`Самое короткое слово в предложении "${sentence}" - это слово "${shotWord}"`);
