//Дана слово. Получить строку из данного слова, где нечетные буквы будут заглавными, а четные - строчными.

let word = 'Пилорама';
let newStr;
console.log(word);
word = word.toLowerCase()
           .split('');
console.log(word);
word = word.map(function(item, index)  {
    if(index % 2 != 0){
        return item.toUpperCase();
    }
}).join('');
console.log(newStr);

/*for(i = 0; i < word.length && (i % 2 != 0); i++){
    newStr = word[i].toUpperCase().join('');
}
console.log(word);
console.log(newStr);*/