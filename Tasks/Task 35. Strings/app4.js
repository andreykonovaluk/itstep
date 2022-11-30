/*4. Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' 
тремя разными способами (через substr, substring, slice).
*/

const a = 'я учу javascript!';
subStr = a.substr(2,3);
subStr2 = a.substr(6,10);
console.log(subStr, subStr2);

subString1 = a.substring(2, 5);
subString2 = a.substring(6, 16);
console.log(subString1, subString2);

slice1 = a.slice(2,5);
slice2 = a.slice(6, 16);
console.log(slice1);
console.log(slice2);