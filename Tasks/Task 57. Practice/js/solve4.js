//4. Дано поле ввода, кнопка и текст. В поле ввода разрешить вводить не более одного символа. Если в поле ввода введен один символ, то при нажатии на кнопку неоходимо подсчитать - сколько раз этот символ стречается в тексте.

let input = document.querySelector("input");
let button = document.querySelector("button");

input.addEventListener("keypress", function(event){
    if(input.value.length >=1){
        event.preventDefault();  //HTML-атрибут maxlength="" <input> - устанавливает максимальное колличество вводимых символов 
    }
});

button.addEventListener("click", function () {
    let p = document.querySelector("p");
    let text = p.innerText;
    let element = input.value;

    let result = document.querySelector(".result");
    result.innerText = text.split(element).length - 1;
});