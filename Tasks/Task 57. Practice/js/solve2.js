/*2. Дана форма с одним полем ввода.
    - при унастновки курсора в поле ввода закрашивать ее в синий цвет.
    - при убирании курсора из поля возвращать фон в начальное состояние.
    события focus/blur;
*/

let input = document.querySelector("input");


input.addEventListener("focus", function(){
    this.classList.add("blue");

    input.addEventListener("blur" , function () {
        this.classList.remove("blue");
    });
});
