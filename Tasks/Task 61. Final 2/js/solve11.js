//11. Реализовать калькулятор продуктов. Он будет представлять собой таблицу, в которую пользователь будет вносить свои покупки. Покупки вносятся с помощью формы (код_товара, название, цена_одной_единицы, количество). Кроме того, для каждого продукта предусмотреть кнопку удаления и редактирования. Редактирование также должно происходить по двойному клику по строке в таблице. Под таблицей должна выводится суммарная стоимость продуктов, которая должна пересчитываться при добавлении, удалении и редактировании продуктов.

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let errors = document.querySelectorAll(".error-text");

    if (errors.length) {
        Array.from(errors).forEach((errorSpan) => {
            errorSpan.parentElement.classList.remove("error");
            errorSpan.remove();
        })
    }

    let hasError = false;

    let data = new FormData(this);

    data.forEach((value, name) => {
        if (value == "") {
            let span = document.createElement("span");
            span.className = "error-text"; // span.classList.add("error-text");
            span.innerText = "Заполните поле";
            let field = this.querySelector(`[name="${name}"]`); //this = form
            if (name != "type") {
                field.insertAdjacentElement("afterend", span);
                field.parentElement.classList.add("error");
            } else {
                field.parentElement.parentElement.insertAdjacentElement("beforeend", span);
                field.parentElement.parentElement.classList.add("error");
            }
            hasError = true;
        }
    });
    if (!hasError) {
        let table = document.querySelector("tbody");
        let saveButton = this.querySelector("button.save");
        if (saveButton) {
            let tr = document.querySelector(".edit-row");
            let index = 0;
            data.forEach((value, name) => {
                let td = tr.children[index];
                td.innerText = value;
                index++;
            });
            saveButton.innerText = "Добавить";
            saveButton.classList.remove("save");
            tr.classList.remove("edit-row");
        } else {
            let tr = document.createElement("tr");
            data.forEach((value, name) => {
                let td = document.createElement("td");
                td.innerText = value;
                tr.insertAdjacentElement("beforeend", td);
            });

            //let sum = document.querySelector(".sum");

            let tdAction = document.createElement("td");

            let editButton = document.createElement("button");
            editButton.innerText = "Редактировать";
            tdAction.insertAdjacentElement("beforeend", editButton);

            let deleteButton = document.createElement("button");
            deleteButton.innerText = "Удалить";
            tdAction.insertAdjacentElement("beforeend", deleteButton);

            tr.insertAdjacentElement("beforeend", tdAction);
            table.insertAdjacentElement("beforeend", tr);

            deleteButton.addEventListener("click", function () {
                //sum.innerText = Number(sum.innerText) - Number(this.previousElementSibling.previousElementSibling) * Number(this.previousElementSibling);
                this.closest("tr").remove();
            });

            editButton.addEventListener("click", function () {
                let editTr = document.querySelector(".edit-row");
                if (editTr) {
                    editTr.classList.remove("edit-row");
                }
                this.closest("tr").classList.add("edit-row");

                document.querySelector(`[name="productCode"]`).value = this.closest("tr").children[0].innerText;
                document.querySelector(`[name="productName"]`).value = this.closest("tr").children[1].innerText;
                document.querySelector(`[name="unitPrice"]`).value = this.closest("tr").children[2].innerText;
                document.querySelector(`[name="quantity"]`).value = this.closest("tr").children[3].innerText;
                document.querySelector("[type='submit']").innerText = "Сохранить";
                document.querySelector("[type='submit']").classList.add("save");
            });
        }
        
        let sum = document.querySelector(".sum");
        let unitPriceNum = Number(document.querySelector(`[name="unitPrice"]`).value);
        let quantityNum = Number(document.querySelector(`[name="quantity"]`).value);
        console.log(unitPriceNum);
        console.log(quantityNum);

        sum.innerText = Number(sum.innerText) + unitPriceNum * quantityNum;
        console.log(Number(sum.innerText));
        this.reset();
    } 
    
});