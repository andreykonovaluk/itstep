//8. Дана шахматная таблица, 2 поля ввода, 2 радиокнопки с выбором цвета (белый и черный) и простая кнопка. При нажатии на кнопку в заданные координаты, которые введены в поля, должна ставится шашка выбранного цвета. Если там уже стоит шашка, то она должна удалятся и ставится новая.

let button = document.querySelector(".btn");
button.addEventListener("click", function(){

    let chess = document.querySelector(".chess");
    if (chess)
        chess.remove();

    chess = document.createElement("div");
    chess.classList.add("chess");

    input1 = document.querySelector("#input1");
    input2 = document.querySelector("#input2");
    
    if (input1.value == "a" && input2.value == 1){
        document.querySelector(".a1").insertAdjacentElement("afterbegin", chess);
    } else if (input1.value == "a" && input2.value == 2) {
        document.querySelector(".a2").insertAdjacentElement("afterbegin", chess);
    } else if (input1.value == "a" && input2.value == 3) {
        document.querySelector(".a3").insertAdjacentElement("afterbegin", chess);
    } else if (input1.value == "a" && input2.value == 4) {
        document.querySelector(".a4").insertAdjacentElement("afterbegin", chess);
    } else if (input1.value == "b" && input2.value == 1) {
        document.querySelector(".b1").insertAdjacentElement("afterbegin", chess);
    } else if (input1.value == "b" && input2.value == 2) {
        document.querySelector(".b2").insertAdjacentElement("afterbegin", chess);
    } else if (input1.value == "b" && input2.value == 3) {
        document.querySelector(".b3").insertAdjacentElement("afterbegin", chess);
    } else if (input1.value == "b" && input2.value == 4) {
        document.querySelector(".b4").insertAdjacentElement("afterbegin", chess);
    } else if (input1.value == "c" && input2.value == 1) {
        document.querySelector(".c1").insertAdjacentElement("afterbegin", chess);
    } else if (input1.value == "c" && input2.value == 2) {
        document.querySelector(".c2").insertAdjacentElement("afterbegin", chess);
    } else if (input1.value == "c" && input2.value == 3) {
        document.querySelector(".c3").insertAdjacentElement("afterbegin", chess);
    } else if (input1.value == "c" && input2.value == 4) {
        document.querySelector(".c4").insertAdjacentElement("afterbegin", chess);
    } else if (input1.value == "d" && input2.value == 1) {
        document.querySelector(".d1").insertAdjacentElement("afterbegin", chess);
    } else if (input1.value == "d" && input2.value == 2) {
        document.querySelector(".d2").insertAdjacentElement("afterbegin", chess);
    } else if (input1.value == "d" && input2.value == 3) {
        document.querySelector(".d3").insertAdjacentElement("afterbegin", chess);
    } else if (input1.value == "d" && input2.value == 4) {
        document.querySelector(".d4").insertAdjacentElement("afterbegin", chess);
    } else{
        document.querySelector(".message").innerText = "ошибка ввода";
    }

    if (document.querySelector("#white").checked) {
        chess.style.background = "#fff";
    }
    if (document.querySelector("#black").checked) {
        chess.style.background = "#000";
    }
    this.reset();

});