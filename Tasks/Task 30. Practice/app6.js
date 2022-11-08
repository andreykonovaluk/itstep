//Дан массив из n элементов.Увелить все нечетные элементы на 1 и уменьшить все четные в 2 раза.

const min = 1, max = 100, n = 21, k = 2;
a = [];
for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;

}
console.log(a);

for(let i = 0; i < a.length; i++){
    if(a[i] % 2 == 0){
        a[i] = a[i] / 2;
    }
    if (a[i] % 2 != 0) {
        a[i] = a[i] + 1;
    }
}
console.log(a);