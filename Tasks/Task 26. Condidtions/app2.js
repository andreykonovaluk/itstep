//задача 2
var y = 21, z = 29;
if ((y % 2 != 0) && (z % 2 != 0)) {
    console.log('y - нечётное число', "z - нечетное число")
} else if ((y % 2 != 0) && (z % 2 == 0)) {
    console.log("y - нечётное число");
} else {
    console.log("z - нечётное число");
}