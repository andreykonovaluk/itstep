/*2. Дан маркированный список из 5 пунктов с произвольным текстом
    - при клике на какой-либо элемент списка, этот элемент должен менять цвет на красный, причем всегда должен быть только 1 выделенный элемент;
    - при двойном клике элемент должен дублироваться и копия помещаться в конец списка;
    - при наведении на элемент текст должен становится полужирным (использовать тег b для этого), при убирании курсора - возвращаться в исходное состояние;
*/


//- при клике на какой-либо элемент списка, этот элемент должен менять цвет на красный, причем всегда должен быть только 1 выделенный элемент;
let ul = document.querySelector("ul");
ul.addEventListener("click", function(event){
    let classEdit = document.querySelector(".edit");
    if (classEdit) {
        classEdit.style.color = "#000";
        classEdit.classList.remove("edit");
    }
    event.target.style.color = "#f00";
    event.target.classList.add("edit");
});


//- при двойном клике элемент должен дублироваться и копия помещаться в конец списка;
ul.addEventListener("dblclick", function (event){
    let li = document.createElement("li");
    li.innerText = event.target.innerText;
    this.insertAdjacentElement("beforeend", li);
});


//- при наведении на элемент текст должен становится полужирным (использовать тег b для этого), при убирании курсора - возвращаться в исходное состояние;
ul.addEventListener("mouseover", function (event) {
    event.target.innerHTML = `<b>${event.target.innerHTML}</b>`;
    
});
ul.addEventListener("mouseout", function (event) {
    event.target.innerHTML = `${event.target.innerText}`;

});