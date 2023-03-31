let form = document.getElementById("reg_form");

let td4;

form.addEventListener("submit", function(event){
    event.preventDefault(); 

    let errors = document.querySelectorAll(".error-text");
    
    if (errors.length) {
        Array.from(errors).forEach((errorSpan) => {
            errorSpan.parentElement.classList.remove("error");
            errorSpan.remove();
        })
    }

    let hasError = false;

    let nameInput = document.querySelector("#name");
    let areaInput = document.querySelector("#area");

    let fields = [nameInput, areaInput];

    fields.forEach((field) => {
        if(field.value == ""){
            let span = document.createElement("span");
            span.className = "error-text"; 
            span.innerText = "Заполните поле";
            field.insertAdjacentElement("afterend", span);
            field.parentElement.classList.add("error");
            hasError = true;
        }
    });


    let localityTypes = ["#regionalCity", "#districtCity", "#settlement", "#ruralSettlement"];

    let checked = localityTypes.some((radioId) => {
        return document.querySelector(radioId).checked;
    })

    if (!checked) {
        let span = document.createElement("span");
        span.className = "error-text";
        span.innerText = "Выберите тип населенного пункта";
        document.querySelector("#ruralSettlement").parentElement.insertAdjacentElement("afterend", span);
        hasError = true;
    }

    
    
    let tbody = document.querySelector("tbody");
    
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td4 = document.createElement("td");
    let createButtonEdit = document.createElement("button");
    let createButtonDel = document.createElement("button");
    let td3 = document.createElement("td");

    td1.innerText = nameInput.value;
    td2.innerText = areaInput.value;
    
    createButtonEdit.classList.add("fifth", "edit-button");
    createButtonDel.classList.add("fifth", "delete-button");
    createButtonEdit.innerText = "Редактировать";
    createButtonDel.innerText = "Удалить";

    tr.insertAdjacentElement("afterbegin", td1);
    tr.insertAdjacentElement("beforeend", td2);
    tr.insertAdjacentElement("beforeend", td4)
    td3.insertAdjacentElement("afterbegin", createButtonEdit);
    td3.insertAdjacentElement("beforeend", createButtonDel);
    tr.insertAdjacentElement("beforeend", td3);
    tbody.insertAdjacentElement("beforeend", tr);

    localityTypes.forEach((radioId) => {
        if (document.querySelector(radioId).checked){
            let checkedValue = document.querySelector(radioId).value;
        }
    })
    td4.innerText = checkedValue;

    /*for (i = 0; i <= localityTypes.length; i++){
        if (document.querySelector("#regionalCity").checked) {
            td4.innerText = document.querySelector("#regionalCity").value;
        } else if (document.querySelector("#districtCity").checked) {
            td4.innerText = document.querySelector("#districtCity").value;
        } else if (document.querySelector("#settlement").checked) {
            td4.innerText = document.querySelector("#settlement").value;
        } else {
            td4.innerText = document.querySelector("#ruralSettlement").value;
        }
    }*/

    this.reset();

    createButtonDel.addEventListener("click", function () {
        let tr = this.parentElement.parentElement;
        tr.remove();
    });
    
    if (createButtonEdit) {
        createButtonEdit.addEventListener("click", function () {
            createButtonEdit.innerText = "Сохранить";
            createButtonEdit.classList.remove("edit-button");
            createButtonEdit.classList.add("save-button");
            this.parentElement.parentElement.style.backgroundColor = "#003f34";
            nameInput.value = this.parentElement.parentElement.firstElementChild.textContent;
            areaInput.value = this.parentElement.parentElement.firstElementChild.nextElementSibling.textContent;

            /*if (td4.innerText == document.querySelector("#regionalCity").value) {
                document.querySelector("#regionalCity").checked;
            } else if (td4.innerText == document.querySelector("#districtCity").value) {
                document.querySelector("#districtCity").checked;
            } else if (td4.innerText = document.querySelector("#settlement").value) {
                document.querySelector("#settlement").checked;
            } else {
                document.querySelector("#ruralSettlement").checked;
            }*/
            
            let classEdit = document.querySelector(".edit");
            if (classEdit) {
                classEdit.style.backgroundColor = "#fff";
                classEdit.classList.remove("edit");
            }
            this.parentElement.parentElement.classList.add("edit");
                   
            let saveButton = document.querySelector(".save-button");
            if (saveButton) {
                saveButton.addEventListener("click", function () {
                    
                    nameInputValue = document.querySelector("#name").value;
                    areaInputValue = document.querySelector("#area").value;

                    localityTypes = ["#regionalCity", "#districtCity", "#settlement", "#ruralSettlement"];

                    for (i = 0; i <= localityTypes.length; i++) {
                        if (document.querySelector("#regionalCity").checked) {
                            td4 = document.querySelector("#regionalCity").value;
                        } else if (document.querySelector("#districtCity").checked) {
                            td4 = document.querySelector("#districtCity").value;
                        } else if (document.querySelector("#settlement").checked) {
                            td4 = document.querySelector("#settlement").value;
                        } else if (document.querySelector("#ruralSettlement").checked) {
                            td4 = document.querySelector("#ruralSettlement").value;
                        }
                    }

                    let classEdit = document.querySelector(".edit");
                    if (classEdit) {
                        saveButton.innerText = "Редактировать";
                        saveButton.classList.remove("save-button");
                        saveButton.classList.add("edit-button");
                        nameInputValue = document.querySelector("#name").value;
                        areaInputValue = document.querySelector("#area").value;
                        classEdit.firstElementChild.textContent = nameInputValue;
                        classEdit.firstElementChild.nextElementSibling.textContent = areaInputValue;
                        classEdit.lastElementChild.previousElementSibling.innerText = td4;
                        classEdit.style.backgroundColor = "#fff";
                        classEdit.classList.remove("edit");
                        document.querySelector("#name").value = "";
                        document.querySelector("#area").value = "";

                    }
                });
            }
            
        });

        
    }
    form.reset(); 
    
    
});

