// сумма 3х значных чисел, которые делятся на 10 и на 13
console.log('for');

var sum = 0;

for(let i = 100; i <= 999; i++){
    if((i % 10 ==0) && (i % 13 == 0)){
        sum += i;
    }
}
console.log(sum);


console.log('while');

i = 100, sum = 0;
while (i < 1000) {
    if ((i % 10 == 0) && (i % 13 == 0)) {
        sum += i;
    }
    i++;
    
}
console.log(sum);



console.log('do while');
sum = 0, i = 100;
do {
    if ((i % 10 == 0) && (i % 13 == 0)) {
        sum += i;
    }
    i++;
}
while (i < 1000);
console.log(sum);





