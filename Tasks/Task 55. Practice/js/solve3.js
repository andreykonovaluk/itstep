//3. Дано 10 блоков. Сделать так, что при наведении в блоке менялась прозрачность фона и выводился порядковый номер блока, а при уведении курсора все возвращалось в исходное состояние.
let children = document.querySelectorAll(".children");
Array.from(children).forEach((item, index) =>{
    item.innerText = "";

});
let box = document.querySelector(".box");
box.onmouseover = function (event) {
    console.log(Array.from(children));
    event.target.style.opacity = 0.5;
    Array.from(children).forEach((item, index) => {
        item.onmouseover = function(){
            item.innerText = index + 1;
        }
    });
    
}

box.onmouseout = function (event) {
    event.target.style.opacity = 1;
    Array.from(children).forEach((item, index) => {
        item.onmouseout = function () {
            item.innerText = "";
        }
    });
}