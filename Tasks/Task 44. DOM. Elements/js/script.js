//1. Элемент: #first-element. 

let firstElement = document.querySelector(".my-class");

 if(firstElement){
    console.log(firstElement.id);
    console.log(firstElement.className);
    console.log(firstElement.classList.add("www")); //Добавьте ему класс www
    console.log(firstElement.classList.remove("www")); //Удалите у него класс www
    console.log(firstElement.classList.contains("www")); //Проверьте наличие у него класса www
    console.log(firstElement.classList.toggle("www")); //Добавьте ему класс www, если его нет и удалите - если есть
    console.log(firstElement.classList.length); //Узнайте количество его классов.
    console.log(firstElement.classList); //Выведите последовательно через console.log его классы
    firstElement.style.cssText = 'color: #f00; font-size: 30px; border: solid 2px green'; //Сделайте его красного цвета, размером 30px, добавьте ему границу
    console.log(firstElement.tagName.toLowerCase());//Выведите название его тега в нижнем регистре
    
}


//Вставьте ему в конец span с текстом 'мой любимый спан'

let span = document.createElement("span");
span.innerHTML = 'мой любимый спан';
firstElement.appendChild(span);


/*Вставьте ему в конец список ul с элементами массива [createElement, appendChild, insertBefore] так, 
чтобы каждый элемент стоял в своем li.*/

let ul = document.createElement("ul");
firstElement.appendChild(ul);
ul = [];
let li;
for (let i = 1; i <= 3; i++){
    li = document.createElement("li");
    li.innerHTML = i;
    firstElement.lastElementChild.appendChild(li);
}


//Вставьте перед ним div с классом neighbor и текстом 'еще один сосед'*/

firstElement.insertAdjacentHTML("beforeBegin","<div>Еще один сосед</div>");
firstElement.previousElementSibling.classList.add("neighbor");
console.log(firstElement.previousElementSibling.classList);


//2. Элемент: #second-element:

//Вставьте перед ним span с текстом '!!!'
let secondElement = document.querySelector("#second-element");

if (secondElement){
    console.log(secondElement.id);
}

secondElement.insertAdjacentHTML("beforeBegin", "<span>!!!</span>");


//Вставьте после него span с текстом '!!!'
secondElement.insertAdjacentHTML("afterEnd", "<span>!!!</span>");


//Вставьте ему в начало span с текстом '!!!'.
secondElement.insertAdjacentHTML("afterBegin", "<span>!!!</span>");

//Вставьте ему в конец span с текстом '!!!'
secondElement.insertAdjacentHTML("BeforeEnd", "<span>!!!</span>");


//3. Элемент: #third-element:

// - Найдите первого потомка этого элемента и сделайте его текст красного цвета.
let thirdElement = document.querySelector("#third-element");
if(thirdElement){
    console.log(thirdElement.id);
    thirdElement.firstElementChild.style.cssText = 'color: red';

    //- Найдите последнего потомка этого элемента и сделайте его текст красного цвета.
    thirdElement.lastElementChild.style.cssText = 'color: red';

    // - Найдите всех потомков этого элемента и добавьте им в конец текст '!'.
    let thirdElementChildren = thirdElement.children;

    for (let i = 0; i <= thirdElementChildren.length; i++){
    //.insertAdjacentElement("BeforeEnd", "!");
        //let elem = thirdElementChildren.createElement('!');
        //thirdElementChildren.insertAdjacentElement('beforeEnd', elem);
        thirdElementChildren[i].innerHTML += "!";
    }
}


/*4. Элемент: #fourth-element

 - Найдите его соседа снизу и добавьте ему в конец текст '!'.
 - Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'. */


 // - Найдите его соседа сверху и добавьте ему в конец текст '!'.
let fourthElement = document.querySelector("#fourth-element");
if (fourthElement){

   fourthElement.previousElementSibling.insertAdjacentText('beforeend', "!");
    console.log(leftSibling);
}