//8. Дано предложение. Найти символ, который чаще всего в нем встречается.

let sentence = "мама мыла раму";
let uniqueArray = Array.from(new Set(sentence.toLowerCase().split("")));
let unique = [];

uniqueArray.forEach((item, index) => {
    let count = sentence.toLowerCase()
                        .split("")
                        .filter((letter) => letter == item).length;

    unique[index] = count;
});

let maxIndex = (unique.indexOf(Math.max(...unique)));
let maxSimbolCount = uniqueArray[maxIndex];
console.log(`Самый частовстречаемый символ в предложении: "${maxSimbolCount}"`);