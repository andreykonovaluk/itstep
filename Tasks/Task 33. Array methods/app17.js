/*every, some:
17. Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
*/

const a = [1, 2, 3, 4, 5];
console.log(a);
function aboveZero(elem) {
    return elem > 0;
}
b = a.every(aboveZero);
console.log(b);