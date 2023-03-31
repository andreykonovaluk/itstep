//5. Дано: поле ввода и кнопка. При нажатии на кнопку, вывести, яввляется ли введеное значение числом.

let button = document.querySelector(".btn_click");
if (button) {
    button.addEventListener("click", function () {

        let input1 = document.querySelector("#number");

        let input1Value = input1.value;

        if (input1Value == +input1.value){
            console.log("Введенное значение является числом");
        } else {
            console.log("Введенное значение не является числом");
        }

    });
}