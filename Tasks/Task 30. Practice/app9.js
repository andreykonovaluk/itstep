//Дан массив из n элементов.Проверить, упорядочен ли массив по возрастанию или убыванию.

const min = 1, max = 100, n = 21, k = 2;
a = [3, 8, 1];
posCount = 0;
negCount = 0;
/*for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;

}*/
console.log(a);

for (let i = 1; i < a.length; i++) {
    if (a[i-1] <= a[i]) {
        posCount++;
        
    } else if (a[i-1] >= a[i]) {
        negCount++;
    }
}
if (posCount == (a.length - 1)){
    console.log('Массив упорядочен по возрастанию')
} else if (negCount == (a.length - 1)){
    console.log('Массив упорядочен по убыванию')
} else {
    console.log('Массив НЕ упорядочен')
}
