//2. Дана ссылка. Сделать так, чтобы при нажатии на ссылку не происходил переход по адресу.
let a = document.querySelector("a");
a.addEventListener("click", function(event){
event.preventDefault();
});