var a = 13, b = 39;
if ((a % 2 != 0) && (b % 2 != 0) && (a % 13 == 0) && (b % 13 == 0)) {
    console.log(a*b)
} else {
    console.log("некоректный ввод")
}