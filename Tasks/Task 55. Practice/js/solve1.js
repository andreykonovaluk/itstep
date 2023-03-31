//1. Дано поле ввода и кнопка. Вводится число. При нажатии на кнопку сгенерировать маркированный список из чисел от 1 до введенного.


let button = document.querySelector(".btn");
button.addEventListener("click", function(){
    let div = document.querySelector("div");
    let input = document.querySelector("#field");
    let value = +input.value;
    if(div.children.length == 0){
        let ul = document.createElement("ul");
        
        for(let i = 1; i <= value; i++){
            let li = document.createElement("li");
            li.innerText = `${i}`;
            ul.insertAdjacentElement("beforeend", li);
        }
    
        div.insertAdjacentElement("afterbegin", ul);
    }
    reset();
});