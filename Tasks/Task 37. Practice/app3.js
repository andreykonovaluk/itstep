//Слить 3 массива и вывести на экран элементы полученного массива в порядке убывания значений.
let a = [1, 3, 6, 4, 3, 3, 5, 6];
let b = [4, 3, 3, 1, 3, 6, 5, 6];
let c = [3, 5, 6, 1, 3, 6, 4, 3];
res = a.concat(b).concat(c).sort((a,b) => b - a);
console.log(res);