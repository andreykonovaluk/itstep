//9. Напишите функцию, которая принимает строку на английском языке в качестве аргумента и возвращает количество гласных, содержащихся в этой строке.

function searchVowels(str){
    
    const vowels = ["e", "u", "i", "o", "a"];
    strVowels = vowels.join("");
    let countOfVowels = str.split('').filter((item) => strVowels.includes(item)).length;
    return countOfVowels;
}
console.log(searchVowels("dead by april"));