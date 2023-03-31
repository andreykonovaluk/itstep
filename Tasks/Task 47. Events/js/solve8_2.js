//8. Дано: 3 кнопки. При нажатии на любую кнопку, должны меняться цвета 2 оставшихся на случайный цвет.

let btn1 = document.querySelector("btn_1");
let btn2 = document.querySelector("btn_2");
let btn3 = document.querySelector("btn_3");


/*let randomColor = Math.floor(Math.random() * 16777215).toString(16);
document.body.style.backgroundColor = "#" + randomColor;
color.innerHTML = "#" + randomColor;*/
let setBg = () => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    btn2.style.backgroundColor = "#" + randomColor;
    randomColor = Math.floor(Math.random() * 16777215).toString(16);
    btn3.style.backgroundColor = "#" + randomColor;
    
}



if (btn1) {
    btn1.addEventListener("click", setBg);
    setBg();
}

if (btn2) {
    btn2.addEventListener("click", function () {

       

    });
}

if (btn3) {
    btn3.addEventListener("click", function () {

      

    });
}