//2. Дано поле ввода, кнопка и div. Если в div нет списка, то добавить маркированный список с одним элементом с текстом введеным в поле. При последующем нажатии добавлять в конец списка элемент списка с текстом введеным в поле.

let button = document.querySelector(".btn_click");
if (button) {
    button.addEventListener("click", function () {

        let input1 = document.querySelector("#number");
        let input1Value = input1.value;

        let div = document.querySelector("div");
        
        if (div.children.length == 0) {
            let ul = document.createElement("ul");

            let li = document.createElement("li");
            li.innerText = input1Value;
            ul.insertAdjacentElement("beforeend", li);
            
            div.insertAdjacentElement("afterbegin", ul);
        }
       
        else {
            ul = document.querySelector("ul");
            li = document.createElement("li");
            li.innerText = input1Value;
            ul.insertAdjacentElement("beforeend", li);
        }

    });
}