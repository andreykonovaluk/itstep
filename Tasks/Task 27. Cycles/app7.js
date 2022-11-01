var i = 1, mul = 1;
for (let i = 1; i<=10; i++){

    mul *= (i * (i + 1)) / 2;

    //console.log(`Итерация ${i}, mul=${mul} i=${i}`);

}
console.log(mul);