/*splice:
12. Дан массив [1, 2, 3, 4, 5]. 
С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
*/

const a = [1, 2, 3, 4, 5];
console.log(a);
a.splice(1, 0, 'a', 'b');
console.log(a);
a.splice(6, 0, 'c');
console.log(a);
a.splice(8, 0, 'e');
console.log(a);