var N = 10, i = 1, sum = 0;
while(i < (N / 2)) {

    sum += 2 * i;
    i++;
   // console.log(`Итерация ${i - 1} sum=${sum}, i=${i}`);
}
console.log(sum);