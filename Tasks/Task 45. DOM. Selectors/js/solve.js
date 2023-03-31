//1. Элемент: #first-element. 


let firstElement = document.querySelector("#first-element");
console.log(firstElement.id);
let neighbors = firstElement.parentElement.querySelectorAll(".neighbor");
if(neighbors.length){
    

    /*firstElement.previousElementSibling.innerText = `Я хороший сосед`;
    firstElement.previousElementSibling.previousElementSibling.innerText = `Я хороший сосед`;
    firstElement.nextElementSibling.innerText = `Я хороший сосед`;
    firstElement.nextElementSibling.nextElementSibling.innerText = `Я хороший сосед`;*/


    //- поменяйте "Я сосед" на "Я хороший сосед"
    Array.from(neighbors).forEach(function(element){
        element.innerHTML = "Я хороший сосед";
    });


    //- добавить к каждому соседу его номер, например, "Я хороший сосед №2"
    Array.from(neighbors).forEach(function (element,index) {
        element.innerHTML = `Я хороший сосед №${index+1}`;
    });
    

    //- оберните текст в элементах с классом "neighbor" в тег span
    Array.from(neighbors).forEach(function (element) {
        element.innerHTML = `<span>${element.innerHTML}</span>`;
    });
    
    
    //- замените теги span на тег b
    Array.from(neighbors).forEach(function(element){
        element.innerHTML = `<b>${element.innerText}</b>`;
    });


    //- замените текст "Я хороший сосед" на "Я последний хороший сосед" у элемента с классом "fourth-neighbor"
    let lastNeighbor = firstElement.parentElement.querySelector(".fourth-neighbor");
    if(lastNeighbor){
        if(lastNeighbor.firstElementChild){
            lastNeighbor.firstElementChild.innerHTML = "Я последний хороший сосед";
        }
    }
}


/*2. Элемент: #second-element.
- добавить маркированный список из 10 элементов с текстом "Пункт 1", "Пункт 2" и т.д.
- каждый четный пункт покрасить в красный цвет
- каждому нечетному пункту добавить класс odd-element
- элементам кратным 3 с классом odd-element увеличить шрифт в 2 раза.
*/

let secondElement = document.querySelector("#second-element");
console.log(secondElement.id);
if(secondElement){

//- добавить маркированный список из 10 элементов с текстом "Пункт 1", "Пункт 2" и т.д.
    let list = ["Пункт 1", "Пункт 2", "Пункт 3", "Пункт 4", "Пункт 5", "Пункт 6", "Пункт 7", "Пункт 8", "Пункт 9", "Пункт 10"];
    console.log(list);
    let out = "<ul>";
    list.forEach(function(item){
        out += `<li>${item}</li>`;
    });
    out += "</ul>";
    console.log(out);
    secondElement.insertAdjacentHTML('beforeend',out);


    //- каждый четный пункт покрасить в красный цвет
    
    
}
    


/*5. Элемент: #fifth-element
- Добавить 2 div до элемента с текстом "1" и "2", и 2 div после элемента с текстом "3" и "4"
- В первый div с текстом "1" добавить нумерованный список с 7 элементами с днями недели. Субботу и воскресение покрасить в красный цвет
- В div с текстом "2" вставить 2 span с произвольным текстом. В конец каждого span добавить в скобочках длину (в символах) содержимого span.
- div с текстом "3" обернуть содержимое в тег a со ссылкой на Google, добавить границу и подчеркивание текста.
- div с текстом "4" заменить на тег article с тем же содержимым, добавить классы "news" и "good-news".
*/


//- Добавить 2 div до элемента с текстом "1" и "2", и 2 div после элемента с текстом "3" и "4"
let fifthElement = document.querySelector("#fifth-element");
if(fifthElement){
    let firstDiv = document.createElement("div");
    firstDiv.innerHTML = "1";
    fifthElement.insertAdjacentElement('beforebegin', firstDiv);

    let secondDiv = document.createElement("div");
    secondDiv.innerHTML = "2";
    fifthElement.insertAdjacentElement('beforebegin', secondDiv);

    let thirdDiv = document.createElement("div");
    thirdDiv.innerHTML = "4";
    fifthElement.insertAdjacentElement('afterend', thirdDiv);

    let fouthDiv = document.createElement("div");
    fouthDiv.innerHTML = "3";
    fifthElement.insertAdjacentElement('afterend', fouthDiv);


    //- В первый div с текстом "1" добавить нумерованный список с 7 элементами с днями недели. Субботу и воскресение покрасить в красный цвет
    let ol = document.createElement("ol");
    fifthElement.parentElement.firstElementChild.insertAdjacentElement('beforeend', ol);
    for(let i = 1; i <= 7; i++){
        let li = document.createElement("li");      //Узнать, как правильно было через цикл записать дни недели
        if(i == 1){
            li.innerHTML = `Понедельник`;
        }
        else if (i == 2) {
            li.innerHTML = `Вторник`;
        }
        else if (i == 3) {
            li.innerHTML = `Среда`;
        }
        else if (i == 4) {
            li.innerHTML = `Четверг`;
        }
        else if (i == 5) {
            li.innerHTML = `Пятница`;
        }
        else if (i == 6) {
            li.innerHTML = `Суббота`;
            li.style.color = "#f00";
        }
        else if (i == 7) {
            li.innerHTML = `Воскресенье`;
            li.style.color = "#f00";
        }
        
        ol.insertAdjacentElement("beforeend", li);
    }


    //- В div с текстом "2" вставить 2 span с произвольным текстом. В конец каждого span добавить в скобочках длину (в символах) содержимого span.
    let firstSpan = document.createElement("span");
    fifthElement.previousElementSibling.insertAdjacentHTML('afterbegin', "<span>Это</span>");

    let secondSpan = document.createElement("span");
    fifthElement.previousElementSibling.insertAdjacentElement('beforeend', secondSpan);
    fifthElement.previousElementSibling.lastElementChild.innerText = "сосед";

    let firstSpanLength = fifthElement.previousElementSibling.firstElementChild.innerText;
    fifthElement.previousElementSibling.firstElementChild.innerText = `${firstSpanLength}(${firstSpanLength.length})`;

    let secondSpanLength = fifthElement.previousElementSibling.lastElementChild.innerText;
    fifthElement.previousElementSibling.lastElementChild.innerText = `${secondSpanLength}(${secondSpanLength.length})`;

    console.log(fifthElement.previousElementSibling.firstElementChild);
    console.log(fifthElement.previousElementSibling.firstElementChild.innerHTML.length);
    console.log(fifthElement.previousElementSibling.lastElementChild.innerHTML.length);


    //- div с текстом "3" обернуть содержимое в тег a со ссылкой на Google, добавить границу и подчеркивание текста.
    console.log(fifthElement.nextElementSibling);

    //fifthElement.nextElementSibling.innerHTML = `<a>${innerHTML}</a>`;

    /*let parentThirdElement = fifthElement.parentElement;
    console.log(fifthElement.parentElement);

    Array.from(fifthElement.nextElementSibling).forEach((element) => {

            item.outerHTML = `<a>${item.innerHTML}</a>`;
    });*/

    fifthElement.nextElementSibling.outerHTML = `<a>${fifthElement.nextElementSibling.innerText}</a>`;
    fifthElement.nextElementSibling.setAttribute("href", "https://www.google.com");
    fifthElement.nextElementSibling.style.border = "2px solid #000";
    fifthElement.nextElementSibling.style.textDecoration = "underline";
    console.log(fifthElement.nextElementSibling);    


    //- div с текстом "4" заменить на тег article с тем же содержимым, добавить классы "news" и "good-news".
    let fourthNeibor = fifthElement.nextElementSibling.nextElementSibling;
    if(fourthNeibor){
        fifthElement.nextElementSibling.nextElementSibling.outerHTML = `<article>${fourthNeibor.innerText}</article>`;
        fifthElement.nextElementSibling.nextElementSibling.classList.add("news");
        fifthElement.nextElementSibling.nextElementSibling.classList.add("good-news");
    }
    
}