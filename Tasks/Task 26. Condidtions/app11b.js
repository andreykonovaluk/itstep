var a = 1, b = 0, c = -36, D, x1, x2;
a != 0;
x1 = (-(c / a)) ** 0.5;
x2 = -((-(c / a)) ** 0.5);
if (b == 0 && c == 0 && (-(c / a)) >= 0) {
    console.log("Неполное квадратное уравнение, которое имеет единственный корень x = 0")
} else if (b == 0 && c != 0 && (-(c / a)) >= 0) {
    console.log("Неполное квадратное уравнение, которое имеет корни x1 =", x1, "и x2 =", x2)
} else {
    console.log("Корней нет")
}