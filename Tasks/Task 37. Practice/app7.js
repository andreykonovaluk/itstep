//7. Дано предложение на русском языке. Определить, является ли оно панграммой.
let deletedLetters = ".,:;!?- ";
let str = 'Любя, съешь щипцы, - вздохнёт мэр, - кайф жгуч.';
console.log(str);

let newStr = str.split("").filter((item) => deletedLetters.indexOf(item) == -1).join("");
console.log(newStr);
lowercase = newStr.toLowerCase();
console.log(lowercase);
for (let i = 0; i < newStr.length; i++) {
    if (lowercase.indexOf(newStr[i]) == -1) {
        return "not pangram";
    }
}

return "pangram";



