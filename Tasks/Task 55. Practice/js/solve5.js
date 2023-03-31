//5. Дано 2 поля ввода для чисел и 4 радиокнопки (+,-,*,/). Выводить результат выбранной операции над 2 числами, когда выбирается сама операция. В случае неккоретного ввода чисел предусмотреть вывод сообщения об этом вместо результата.
let radioBtn = document.querySelector(".form-control");


radioBtn.addEventListener("click", function(){
    
    let input1 = document.querySelector("#input1");
    let input2 = document.querySelector("#input2");
    let x = +input1.value;
    let y = +input2.value;
    
    let div = document.querySelector(".result");

    
    
    let operation = ["#sum", "#diff", "#mult", "#division"];

    let checked = operation.some((radioId) => {
        return document.querySelector(radioId).checked; //document.querySelector(radioId) - input
    });
    
    if (x != x || y != y || x == "" || y == "") {
        div.innerHTML = "Некоректный ввод";
    } else{
        if (document.querySelector("#sum").checked) {
            div.innerHTML = `Сумма = ${x + y}<br>`;
        } else if (document.querySelector("#diff").checked) {
            div.innerHTML = `Разность = ${Math.abs(x - y)}<br>`;
        } else if (document.querySelector("#mult").checked) {
            div.innerHTML = `Произведение = ${ x * y }<br>`;
        } else if (document.querySelector("#division").checked) {
            if(y != 0){
                div.innerHTML = `Частное = ${x / y}<br>`;
            } else{
                div.innerHTML = "Деление на 0";
            }
        } 
    }
    

    

    /*Array.from(document.getElementsByTagName('input')).map((event, i) => {
        event.checked == true;
        if(event.checked)
    });*/
});