//Дан массив из n элементов и число k. Вывести все элементы кратные числу k.
const min = 1, max = 100, n = 21, k = 2;
let a = [];
for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    
    
}
console.log(a);

for(i = 0;i < a.length; i++){
    if (a[i] % k == 0) {
        console.log(a[i]);
    }
}