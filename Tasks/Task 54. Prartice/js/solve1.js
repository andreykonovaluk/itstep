/*1. Дан квадратный зеленый блок.
    - при наведении он должен менять цвет на синий, при уводе курсора возвращаться в исходное положение;
    - при клике на квадрат правой кнопкой мыши квадрат должен увеличиваться в 2 раза;
    - при клике на квадрат левой кнопкой мыши квадрат должен уменьшаться в 2 раза.
*/


//- при наведении он должен менять цвет на синий, при уводе курсора возвращаться в исходное положение;
document.querySelector(".parent").onmouseover = function (event) {
    if (event.target.classList.contains("parent")) {
        event.target.classList.add("bg-blue")
    }
    
}
document.querySelector(".parent").onmouseout = function (event) {
    if (event.target.classList.contains("parent")) {
        event.target.classList.remove("bg-blue")
    }
   
}


//- при клике на квадрат правой кнопкой мыши квадрат должен увеличиваться в 2 раза;
document.querySelector(".parent").addEventListener("contextmenu", function(event){
    event.preventDefault();  //отменяет стандартные действия браузера(в данном случае отмена контекстного меню)
    let styles = getComputedStyle(this);
    let width = parseInt(styles.width);
    let height = parseInt(styles.height);

    this.style.width = `${width * 2}px`;
    this.style.height = `${height * 2}px`;
});


//- при клике на квадрат левой кнопкой мыши квадрат должен уменьшаться в 2 раза.
document.querySelector(".parent").addEventListener("click", function (event) {
    let styles = getComputedStyle(this);
    let width = parseInt(styles.width);
    let height = parseInt(styles.height);

    this.style.width = `${width / 2}px`;
    this.style.height = `${height / 2}px`;
});