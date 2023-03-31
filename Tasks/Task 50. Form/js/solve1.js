let form = document.querySelector(".reg-form");
form.addEventListener("submit", function(e){
    e.preventDefault();
    let div = document.querySelector(".result");
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let phone = document.querySelector("#phone").value;
    let education = document.querySelector("#education").value;

    div.innerHTML += `Имя: ${name}<br>`;
    div.innerHTML += `Ящик: ${email}<br>`;
    div.innerHTML += `Телефон: ${phone}<br>`;
    div.innerHTML += `Образование: ${education}<br>`;

    let inputSexM = document.querySelector("#sex-m");
    if(inputSexM.checked){
        div.innerHTML += `Пол: ${inputSexM.value}<br>`;
    }
    let inputSexW = document.querySelector("#sex-w");
    if(inputSexW.checked){
        div.innerHTML += `Пол: ${inputSexW.value}<br>`;
    }
    
    let hobbies = document.querySelectorAll(".form-control-check");
    
    //console.log(hobbies);
    
    Array.from(hobbies).forEach(function(item){
        console.log(item);
    });

    let arrayHobbies = [];

    let inputHobby1 = document.querySelector("#hobby-1");
    if(inputHobby1.checked){
        arrayHobbies.push(inputHobby1.value);
    }
    let inputHobby2 = document.querySelector("#hobby-2");
    if (inputHobby2.checked) {
        arrayHobbies.push(inputHobby2.value);
    }
    let inputHobby3 = document.querySelector("#hobby-3");
    if (inputHobby3.checked) {
        arrayHobbies.push(inputHobby3.value);
    }
    console.log(arrayHobbies);

    div.innerHTML += `Хобби: ${arrayHobbies}<br>`;

    let aboutSelf = document.querySelector("#comment");
    if(aboutSelf){
        div.innerHTML += `О себе: ${aboutSelf.value}<br>`;
    }
    


    if (document.querySelector("#name").value == "") {
        spanName = document.querySelector(".spanName");
        if (spanName) {
            spanName.remove();
        }
        span = document.createElement("span");
        span.classList.add("spanName");
        span.innerText = "Введите имя";
        document.querySelector("#name").insertAdjacentElement("afterend", span);
    } else{
        document.querySelector("#name").nextElementSibling.remove();
    }
    

    if (document.querySelector("#email").value == "") {
        spanEmail = document.querySelector(".spanEmail");
        if (spanEmail) {
            spanEmail.remove();
        }
        span = document.createElement("span");
        span.classList.add("spanEmail");
        span.innerText = "Введите электронный адрес";
        document.querySelector("#email").insertAdjacentElement("afterend", span);
    } else if (document.querySelector("#email").value != "") {
        document.querySelector("#email").nextElementSibling.remove();
    }


    if (document.querySelector("#phone").value == "") {
        spanPhone = document.querySelector(".spanPhone");
        if (spanPhone) {
            spanPhone.remove();
        }
        span = document.createElement("span");
        span.classList.add("spanPhone");
        span.innerText = "Введите номер телефона";
        document.querySelector("#phone").insertAdjacentElement("afterend", span);
    } else if (document.querySelector("#phone").value != "") {
        document.querySelector("#phone").nextElementSibling.remove();
    }


    if (education == ""){
        let spanEducation = document.querySelector(".spanEducation");
        if (spanEducation) {
            spanEducation.remove();
        }
        span = document.createElement("span");
        span.classList.add("spanEducation");
        span.innerText = "Введите образование";
        document.querySelector("#education").insertAdjacentElement("afterend", span);
    } else if (education != "") {
        document.querySelector("#education").nextElementSibling.remove();
    }

    if ((document.querySelector("#sex-m").checked == false) && (document.querySelector("#sex-w").checked == false)){
        let spanSex = document.querySelector(".spanSex");
        if (spanSex) {
            spanSex.remove();
        }
        span = document.createElement("span");
        span.classList.add("spanSex");
        span.innerText = "Пол не выбран";
        document.querySelector("#sex-w").parentElement.insertAdjacentElement("afterend", span);
    } else  {
        document.querySelector("#sex-w").parentElement.nextElementSibling.remove();
    }


    if ((!inputHobby1.checked) && (!inputHobby2.checked) && (!inputHobby3.checked)) {
        let spanHobby = document.querySelector(".spanHobby");
        if (spanHobby) {
            spanHobby.remove();
        }
        span = document.createElement("span");
        span.classList.add("spanHobby");
        span.innerText = "хобби не выбрано";
        inputHobby1.parentElement.parentElement.insertAdjacentElement("afterend", span);
    } else {
        document.querySelector("#hobby-1").parentElement.parentElement.nextElementSibling.remove();
    }

});


