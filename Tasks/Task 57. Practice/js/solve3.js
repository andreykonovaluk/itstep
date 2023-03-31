//3. Дана кнопка (Показать) и div с текстом, который по-умолчанию скрыт. При нажатии на кнопку с надписью "Показать" отображать данный div и менять название кнопки на "Скрыть". При нажатии на кнопку с надписью "Показать" скрывать div и менять название кнопки на "Показать".

let div = document.querySelector("div");
let button = document.querySelector("button");
let show = document.querySelector(".show");

div.hidden = true;

show.addEventListener("click", function(){
    if (show.classList.contains("show")){
        show.classList.remove("show");
    }
    div.hidden = false;
    show.classList.add("hidden");
    show.classList.remove("show");
    show.innerText = "Скрыть";

    let hidden = document.querySelector(".hidden");
    hidden.addEventListener("click", function () {
        div.hidden = true;
        button.classList.remove("hidden");
        button.classList.add("show");
        button.innerText = "Показать";
       
    });
    
});




