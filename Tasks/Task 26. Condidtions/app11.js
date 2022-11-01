var a = 1, b = -2, c = -3, D, x, x1, x2;
    a!=0;
    D = b**2 - 4 * a * c;
    x1 = (-b + D ** 0.5) / (2 * a);
    x2 = (-b - D ** 0.5) / (2 * a);
if (D > 0) {
    console.log("Первый корень x1 =", x1, ", а второй корень x2 =", x2)
} else if (D == 0) {
    console.log("Есть ровно один корень x =", x1)
} else {
    console.log("Корней нет")
}