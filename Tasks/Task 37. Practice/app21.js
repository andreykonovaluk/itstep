//Дано 2 массива и число K. Найти по одному числу с каждого массива, сумма которых будет равна K.

let a = [1, 2, 3, 5, 9, 22, 33];
let b = [8, 23, 2, 11, 5];
let K = 10;
a.forEach(function (item){
    if(b.includes(K - item)){
        console.log(item, K-item)
    }
});

