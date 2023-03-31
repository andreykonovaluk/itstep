//2. Дано: кнопка и абзац с произвольным текстом.Сделать так, чтобы  при нажатии на кнопку текст выделялся полужирным шрифтом.

let button = document.querySelector(".btn_click");
if (button) {
    button.addEventListener("click", function () {

        let p = document.querySelector("p");
        let boldText = p.innerHTML;

        p.innerHTML = `<b>${boldText}</b>`;



    });
}