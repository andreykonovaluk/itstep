/*1. Дан выпадающий список с 5 цветами и блок.
    - сделать так, что каждый пункт был закрашен в соответствующий цвет
    - при выборе цвета сделать так, чтобы блок также закрашивался в выбранный цвет
*/

let box = document.querySelector(".box");
let select = document.querySelector("select");

select.addEventListener("change", function () {
    let color = this.value;
    box.style.background = color;
    //this.style.background = color;
});

let red = document.querySelector("#red");
if(red){
    red.style.background = "#f00";
}

let blue = document.querySelector("#blue");
if (blue) {
    blue.style.background = "#00f";
}

let green = document.querySelector("#green");
if (green) {
    green.style.background = "#0f0";
}

let yellow = document.querySelector("#yellow");
if (yellow) {
    yellow.style.background = "#ff0";
}

let violet = document.querySelector("#violet");
if (violet) {
    violet.style.background = "#800080";
}

