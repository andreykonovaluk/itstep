/*console.log("1");
var a=5;
let a;
console.log(a);*/  //синтаксическая ошибка;

console.log("2");
function count() {
    for (var i = 0; i < 3; i++) {
        var j = i * 2;
    }
    return i + j;
}
console.log(count());     //7

console.log("3");
console.log(+false, +null, +undefined);     //0 0 NaN

console.log("4");
var obj = {
    "0": 1,
    0: 2
};
console.log(obj["0"] + obj[0]);     //4

console.log("5");
a = 2, с = 0;
var b = a + a * a / с;
console.log(b);     //Infinity(деление на "0" = бесконечность в JS)

console.log("6");

//нельзя использовать и <script> и код внутри

console.log("7");
function User() { }
var vasya = new User();
vasya.__proto__.name = "Vasya";    //vasya.prototype
console.log(User.prototype);

console.log("8")
console.log(undefined == 0);