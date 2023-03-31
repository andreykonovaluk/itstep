//3. Дано 2 поля ввода, кнопка и div. При нажатии на кнопку выводить в div большее значение из 2 полей.

let button = document.querySelector(".btn_click");
if (button) {
    button.addEventListener("click", function () {

        let input = document.querySelector("#number");
        let x = +input.value;
        let input2 = document.querySelector("#secondNumber");
        let y = +input2.value;
        let div = document.querySelector("div");
        if (x != x || y != y) {
            div.innerHTML = "Некоректный ввод";
        } else if (x > y) {
            div.innerHTML = "Значение первого поля больше";
        } else if (y > x) {
            div.innerHTML = "Значение второго поля больше";
        } else {
            div.innerHTML = "Значения полей равны";
        }


    });
}