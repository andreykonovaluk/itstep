//6. Дано: кнопка и ссылка. При нажатии на кнопку, в текст ссылки вывести ее адрес. (в конец обработчика добавить return false - отмена событий после обработчика не будут выполняться переход по ссылке;)

let button = document.querySelector(".btn_click");
if (button) {
    button.addEventListener("click", function () {

        let link = document.querySelector("a");
        let aHref = link.href;

        console.log(link);
        console.log(aHref);

        link.innerHTML = aHref;
        
    });
}