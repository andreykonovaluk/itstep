//4. Дано слово на русском языке. Посчитать количество слогов в слове.

let word = "Cинхрофазатрон";
word.toLowerCase().split('');
let count = 0;
for(let i = 0; i < word.length; i++){
    if (word[i] == 'а' || word[i] == 'е' || word[i] == 'ё' || word[i] == 'и' || word[i] == 'о' || word[i] == 'у' || word[i] == 'ы' || word[i] == 'э' || word[i] == 'ю' || word[i] == 'я'){
        count++;
    }
}
console.log(`Колличество слогов в слове ${word} равно ${count}`);