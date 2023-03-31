//9. Дан абзац с текстом и кнопка "Редактировать". При нажатии на кнопку должно появлятся поле ввода, абзац должен скрываться,а в поле ввода должен быть текст из абзаца, кнопка "Редактировать" должна изменить текст на "Сохранить". После изменения текста и нажатии на кнопку "Сохранить" у нас должен оставаться только абзац с новым текстом и кнопкой "Редактировать".
let editButton = document.querySelector(".edit-button");
let saveButton = document.querySelector(".save-button");
saveButton.style.display = "none";
let body = document.querySelector("body");
let p = document.querySelector("p");
editButton.classList.add("edit");
editButton.addEventListener("click", function(event){
    if(editButton){
        saveButton.style.display = "block";
        editButton.style.display = "none";

        let input = document.createElement("input");
        body.insertAdjacentElement("beforeend", input);
        input = document.querySelector("input");
        input.setAttribute('type', 'text');
        input.setAttribute('name', 'field');
        input.setAttribute('value', `${p.innerText}`);
        input.innerText = p.innerText;
        p.style.display = "none";


        saveButton.addEventListener("click", function () {
            p.style.display = "block";
            p.innerText = input.value;
            saveButton.style.display = "none";
            editButton.style.display = "block";
            input.value = "";
            input.remove();
        });
    }
});
