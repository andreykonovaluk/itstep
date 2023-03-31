//7. Дана: кнопка и поле. При нажатии на кнопку, удалить все цифры из поля ввода.

let button = document.querySelector(".btn_click");
if (button) {
    button.addEventListener("click", function () {

        let input = document.querySelector("#number");
        let inputValue = input.value;
        let array = inputValue.split('');

        console.log(array);
        console.log(array.length);

        array = array.filter((elem) => elem != +elem);
        console.log(array);

        let str = array.join('');
        console.log(str);

        input.value = str;
        
    });
}