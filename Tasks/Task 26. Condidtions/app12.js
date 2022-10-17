var a, b, c, disc, x1, x2, p, q;
a = 1, b = 12, c = 36;
disc = Math.pow(b, 2) - 4 * a * c;
if (disc < 0) {
    console.log("Настоящий корень отсутствует");
} else {
    p = -b / (2 * a)
    q = Math.sqrt(disc) / (2 * a)
    x1 = p + q
    x2 = p - q 
    console.log ("Два корня:" + x1 + "," + x2 );
}