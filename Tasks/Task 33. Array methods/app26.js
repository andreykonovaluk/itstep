/*Методы includes и indexOf:
дан массив [1, 3, 4, 6, 2, 2, 1, 3] => [1, 3, 4, 6, 2]. Удалить все повторяющиеся элементы(их дубли).
*/

a = [1, 3, 4, 6, 2, 2, 1, 3];

let unique = [];

a.forEach(function (item) {
    if (!unique.includes(item))
        unique.push(item);
})

console.log(unique);

unique = a.filter(function (item, i) {
    return a.indexOf(item) == i;
})

console.log(unique);