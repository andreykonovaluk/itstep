/*1. Имеется 2 поля ввода: первое - название еды, второе - вес. Также имеются 2 кнопки: Добавить и Сохранить. И еще есть пустая таблица следующего вида:
<table>
    <tr>
        <th>Название</th>
        <th>Вес</th>
        <th>Действия</th>
    </tr>
    <tr>
        <td>Сок</td>
        <td>200</td>
        <td>
            <button class="edit-button">Редактировать<button>
            <button class="delete-button">Удалить<button>
        </td>
    </tr>
</table> 

+При нажатии кнопки "Добавить" в таблицу добавляется новая строка сло структурой аналогичной 2 строке (сок).
+При нажатии кнопки "Удалить" из таблицы удаляется соотвествующая строка.
При нажатии кнопки "Редактировать" в поля заносятся данные из ячеек таблицы, а затем после нажатия кнопки "Сохранить" перезиписываются данные из полей в ту строку, которая редактируется. */

let addButton = document.querySelector(".add-button");

addButton.addEventListener("click", function () {

    let inputFoodName = document.querySelector("#number1");
    let inputFoodWeight = document.querySelector("#number2");
    let input1Value = inputFoodName.value;
    let input2Value = inputFoodWeight.value;

    let tbody = document.querySelector("tbody");

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let createButtonEdit = document.createElement("button");
    let createButtonDel = document.createElement("button");
    let td3 = document.createElement("td");

    td1.innerText = input1Value;
    td2.innerText = input2Value;
    createButtonEdit.classList.add("fifth", "edit-button");
    createButtonDel.classList.add("fifth", "delete-button");
    createButtonEdit.innerText = "Редактировать";
    createButtonDel.innerText = "Удалить";

    tr.insertAdjacentElement("afterbegin", td1);
    tr.insertAdjacentElement("beforeend", td2);
    td3.insertAdjacentElement("afterbegin", createButtonEdit);
    td3.insertAdjacentElement("beforeend", createButtonDel);
    tr.insertAdjacentElement("beforeend", td3);
    tbody.insertAdjacentElement("beforeend", tr);


    createButtonDel.addEventListener("click", function () {
        let tr = this.parentElement.parentElement;
        tr.remove();
    });

    if (createButtonEdit) {
        createButtonEdit.addEventListener("click", function () {  
            inputFoodName.value = this.parentElement.parentElement.firstElementChild.textContent;
            inputFoodWeight.value = this.parentElement.parentElement.firstElementChild.nextElementSibling.textContent;
            let classEdit = document.querySelector(".edit");
            if (classEdit) {
                classEdit.classList.remove("edit");
            }
            this.parentElement.parentElement.classList.add("edit");
        });
    }
});

delButton = document.querySelector(".delete-button"); //удаление первой строки до внесения изменений в табл
delButton.addEventListener("click", function () {
    this.parentElement.parentElement.remove();
});

let saveButton = document.querySelector(".save-button");
if(saveButton){
    saveButton.addEventListener("click", function(){
        input1Value = document.querySelector("#number1").value;
        input2Value = document.querySelector("#number2").value;
        
        let classEdit = document.querySelector(".edit");
        if (classEdit) {
            classEdit.firstElementChild.textContent = input1Value;
            classEdit.firstElementChild.nextElementSibling.textContent = input2Value;
            classEdit.classList.remove("edit");
            document.querySelector("#number1").value = "";
            document.querySelector("#number2").value = "";
        }
    });
}
