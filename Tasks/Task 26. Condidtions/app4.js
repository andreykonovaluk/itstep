var a = 21, b = 29, c = 50;
if ((a > b) && (a > c)) {
    console.log('a больше b и c, и равно', a)
} else if ((a < b) && (b > c)) {
    console.log('b больше a и c, и равно', b)
} else if ((a > b) && (b < c) && (a < c)) {
    console.log('c больше a и b, и равно', c)
} else if ((a < b) && (b < c) && (b < c)) {
    console.log('c больше a и b, и равно', c)
} else {
    console.log('a, b и c равны')
}