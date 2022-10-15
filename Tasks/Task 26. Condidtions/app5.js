var a = 21, b = 29, c = 50;
if ((a > b) && (a > c) && (b > c) || (a < b) && (a < c) && (b < c)) {
    console.log('b среднее по значению и равно', b)
} else if ((a < b) && (a > c) && (b > c) || (a > b) && (a < c) && (b < c)) {
    console.log('a среднее по значению и равно', a)
} else {
    console.log('c среднее по значению и равно', c)
}

