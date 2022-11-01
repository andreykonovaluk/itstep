var i = 1;
var mul = 1;

while (i <= 5) {

    mul *= 2 * i;
    i++;
    console.log(`Итерация ${i - 1} mul=${mul}, i=${2*i}`);
}

console.log(mul);
console.log(i);