/*splice:
11. Дан массив [1, 2, 3, 4, 5]. 
С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
*/
const a = [1, 2, 3, 4, 5];
console.log(a);
a.splice(3, 0, 'a', 'b', 'c');
console.log(a);