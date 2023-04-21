//4. Дано: кнопка и 2 поля ввода. При нажатии на кнопку поменять значения в полях ввода местами.

let button = document.querySelector(".btn_click");
if (button) {
    button.addEventListener("click", function () {

        let input1 = document.querySelector("#number");
        let input2 = document.querySelector("#secondNumber");

        let input1Value = input1.value;
        let input2Value = input2.value;
        
        input1.value = input2Value;
        input2.value = input1Value;
        
    }); 
}