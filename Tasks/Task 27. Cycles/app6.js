var N = 10, i = 1, sum = 0;
while (i <= N) {

    sum += i * i;
    i++;
    //console.log(`Итерация ${i - 1} sum=${sum}, i=${i-1}`);
}
console.log(sum);