var a = 1, b = 12, c = 36, D, x1, x2;
    a!=0;
    D = b**2 - 4 * a * c;
    x1 = (-b + D ** 0.5) / (2 * a);
    x2 = (-b - D ** 0.5) / (2 * a);
if (D > 0) {
    console.log("первый корень =", x1, "а второй =", x2)
} else if (D == 0) {
    console.log("есть ровно один корень, равный", x1)
} else {
    console.log("корней нет")
}