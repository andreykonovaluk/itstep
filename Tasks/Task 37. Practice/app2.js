//Найти сумму только положительных элементов массива.

let a = [1, -2, 3, -4, 5, 6, -7, 8, -9];
sum = 0;
for (let i = 0; i < a.length; i++){
    if(a[i] > 0){
        sum += a[i];
    }
    
}
console.log(sum);

a = [1, -2, 3, -4, 5, 6, -7, 8, -9];
let res = a.filter((elem) => elem > 0).reduce((a, b) => a + b);

console.log(res);