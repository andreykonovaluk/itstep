//5. Дано 2 поля, кнопка и div. Вывести в div сумму, разность, произведение и частное 2 чисел, введеных в поля. При делении на ноль, вместо результата деления выводить текст "Деление на 0".

let button = document.querySelector(".btn_click");
if (button) {
    button.addEventListener("click", function () {

        let input = document.querySelector("#number");
        let x = +input.value;

        let input2 = document.querySelector("#secondNumber");
        let y = +input2.value;

        let div = document.querySelector("div");

        if (x != x || y != y) {
            div.innerHTML = "Некоректный ввод";

        } else if (div.children.length == 0 && y != 0) {
            let ul = document.createElement("ul");

            let li = document.createElement("li");
            li.innerText = `Сумма = ${x + y}`;
            ul.insertAdjacentElement("beforeend", li);

            div.insertAdjacentElement("afterbegin", ul);
        
            if (div.children.length == 1) {
                ul = document.querySelector("ul");
                li = document.createElement("li");
                li.innerText = `Разность = ${Math.abs(x - y)}`;
                ul.insertAdjacentElement("beforeend", li);
            }
            
            if (div.children.length == 1) {
                ul = document.querySelector("ul");
                li = document.createElement("li");
                li.innerText = `Произведение = ${x * y}`;
                ul.insertAdjacentElement("beforeend", li);
            }
            
            if (div.children.length == 1) {
                ul = document.querySelector("ul");
                li = document.createElement("li");
                li.innerText = `Частное = ${x / y}`;
                ul.insertAdjacentElement("beforeend", li);
            }
            
        } else if (div.children.length == 0 && y == 0){
            let ul = document.createElement("ul");

            let li = document.createElement("li");
            li.innerText = "Деление на 0";
            ul.insertAdjacentElement("beforeend", li);

            div.insertAdjacentElement("afterbegin", ul);
        }

    });
}
