let addButton = document.querySelector(".btn_add");
if (addButton) {
    addButton.addEventListener("click", function () {

        let input1 = document.querySelector("#number");
        let input1Value = input1.value;

        let div = document.querySelector("div");
        let ul, li;
        if (div.children.length == 0) {
            ul = document.createElement("ul");

            li = document.createElement("li");
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


        ul = document.querySelector("ul");
        let btn1, btn2;
        
        if(ul.children.length){
            
                btn1 = document.createElement("button");
                btn2 = document.createElement("button");
                btn1.innerText = "Редактировать";
                btn2.innerText = "Удалить";
                li.insertAdjacentElement("Beforeend", btn1);
                li.insertAdjacentElement("beforeend", btn2);

        };
        
        if (btn2) {
            btn2.addEventListener("click", function () {
                let ul = this.parentElement.parentElement;
                this.parentElement.remove(); //удаление родителя кнопки(li);
                if(ul.children.length == 0){
                    ul.remove();
                }
            });
        }


        if(btn1) {
            btn1.addEventListener("click", function (){
                
                input1.value = li.firstChild.nodeValue;
                let classEdit = document.querySelector(".edit");
                if (classEdit) {
                    classEdit.classList.remove("edit");
                }
                li.classList.add("edit");
            });
        }
    });
}

let saveButton = document.querySelector(".btn_save");

saveButton.addEventListener("click", function(){
    let input1 = document.querySelector("input");
    let input1Value = input1.value;
    let classEdit = document.querySelector(".edit");
    if(classEdit){
        classEdit.firstChild.nodeValue = input1Value;
        classEdit.classList.remove("edit");
        input1 = document.querySelector("input");
        input1.value = "";
    }
});