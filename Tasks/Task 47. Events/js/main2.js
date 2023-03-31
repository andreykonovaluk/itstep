let button = document.querySelector(".btn_click");
if(button){
    button.addEventListener("click", function(){

        let input = document.querySelector("#number");
        let x = +input.value;
        let input2 = document.querySelector("#secondNumber");
        let y = +input2.value;
        let p = document.querySelector("p");
        if (typeof x != number || typeof y != number) {    
            p.innerHTML = "Некоректный ввод";
        }
        else {
            p.innerHTML = x + y;
        }
        
    
    });
}