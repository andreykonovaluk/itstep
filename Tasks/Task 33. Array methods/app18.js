/*every, some:
18. Дан массив с числами.Проверьте то, что в нем есть отрицательные элементы.
*/

const a = [1, 2, 3, -4, 5];
console.log(a);
function negativeNumber(elem) {
    return elem < 0;
}
b = a.some(negativeNumber);
console.log(b);