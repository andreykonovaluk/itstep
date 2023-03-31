//1 Дано поле ввода, кнопка и div. В поле вводится число. При нажатии на кнопку в div  должен вставляться маркированный список Пункт 1,  Пункт 2, Пункт 3 и т.д. с количеством элементов, введеным в поле. 


let button = document.querySelector(".btn_click");
if (button) {
    button.addEventListener("click", function () {

        let input1 = document.querySelector("#number");
        let input1Value = +input1.value;

        let div = document.querySelector("div");

        if (div.children.length == 0) {
            let ul = document.createElement("ul");

            for(i = 1; i <= input1Value; i++){
                let li = document.createElement("li");
                li.innerText = `Пункт ${i}`;
                ul.insertAdjacentElement("beforeend", li);
            }
            
            div.insertAdjacentElement("afterbegin", ul);
        }

    });
}