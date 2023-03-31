//8. Дано: 3 кнопки. При нажатии на любую кнопку, должны меняться цвета 2 оставшихся на случайный цвет.

let btn1 = document.querySelector(".btn_1");
let btn2 = document.querySelector(".btn_2");
let btn3 = document.querySelector(".btn_3");


/*let randomColor = Math.floor(Math.random() * 16777215).toString(16);
#.style.backgroundColor = "#" + randomColor;*/


if (btn1){
    btn1.addEventListener("click", function () {
        
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        
        btn2.style.backgroundColor = `#${randomColor}`;

        randomColor = Math.floor(Math.random() * 16777215).toString(16);
        btn3.style.backgroundColor = `#${randomColor}`;

    });
}

if (btn2) {
    btn2.addEventListener("click", function () {

        randomColor = Math.floor(Math.random() * 16777215).toString(16);
        btn1.style.backgroundColor = `#${randomColor}`;

        randomColor = Math.floor(Math.random() * 16777215).toString(16);
        btn3.style.backgroundColor = `#${randomColor}`;

    });
}

if (btn3) {
    btn3.addEventListener("click", function () {

        randomColor = Math.floor(Math.random() * 16777215).toString(16);
        btn1.style.backgroundColor = `#${randomColor}`;

        randomColor = Math.floor(Math.random() * 16777215).toString(16);
        btn2.style.backgroundColor = `#${randomColor}`;

    });
}