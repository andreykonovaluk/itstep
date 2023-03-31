//1. Дано: кнопка и абзац со значением 0. Сделать так, чтобы при нажатии на кнопку число увеличивалось на 1.

let button = document.querySelector(".btn_click");
if (button) {
    button.addEventListener("click", function () {

        let p = document.querySelector("p");
        let x = +p.innerHTML;
        
            p.innerHTML = x + 1;
        


    });
}