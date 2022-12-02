//Дано слово.Проверить, является ли данное слово палиндромом.

let word = 'Alla';
word = word.toLowerCase();
reverceWord = word.split('').reverse().join('');
console.log(reverceWord);
if(reverceWord == word){
    console.log('Слово является палиндромом');
} else{
    console.log('Слово не является палиндромом');
}