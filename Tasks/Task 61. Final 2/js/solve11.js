const form = document.getElementById("reg_form");

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
            span.className = "error-text";
            span.innerText = "Заполните поле";

            let field = this.querySelector(`[name="${name}"]`);
            if (name != "type") {
                field.insertAdjacentElement("afterend", span);
                field.parentElement.classList.add("error");
            } else {
                field.parentElement.parentElement.insertAdjacentElement("beforeend", span);
                field.parentElement.parentElement.classList.add("error");
            }
            hasError = true;
        }
    })
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
            totalSum()
        }
        else {
            let tr = document.createElement("tr");
            data.forEach((value, name) => {
                let td = document.createElement("td");
                td.innerText = value;
                tr.insertAdjacentElement("beforeend", td);
            });

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
                this.closest("tr").remove();
                totalSum()
            })
            editButton.addEventListener("click", function () {
                let editTr = document.querySelector(".edit-row");
                if (editTr) {
                    editTr.classList.remove("edit-row");
                }
                this.closest("tr").classList.add("edit-row");

                document.querySelector(`[name="code"]`).value = this.closest("tr").children[0].innerText;
                document.querySelector(`[name="name"]`).value = this.closest("tr").children[1].innerText;
                document.querySelector(`[name="price"]`).value = this.closest("tr").children[2].innerText;
                document.querySelector(`[name="quantity"]`).value = this.closest("tr").children[3].innerText;
                document.querySelector("[type='submit']").innerText = "Сохранить";
                document.querySelector("[type='submit']").classList.add("save");
            })
            totalSum()
        }
        this.reset();
    }
})

function totalSum() {
    let tr = document.querySelectorAll("tbody tr");
    let result = 0;
    if (tr.length) {
        tr.forEach((item) => {
            let price = +item.children[2].innerText;
            let quantity = +item.children[3].innerText;
            result += price * quantity;
        });
    }
    document.querySelector(".result").innerText = `Стоимость продуктов: ${result}р.`;
}