//Дано предложение. Найти самое длинное слово в предложении.

let str = "Доброе утро Беларусь";
str = str.split(' ');
console.log(str);
let longestWordLength = 0;
for(let i = 0; i < str.length; i++){
    if(str[i].length > longestWordLength){
        longestWord = str[i];
        longestWordLength = str[i].length;
    }
}
console.log("самое длинное слово в предложении -", longestWord, ', его длина составила', longestWordLength, 'символов');