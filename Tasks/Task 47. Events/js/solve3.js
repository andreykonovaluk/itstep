//3. Дано: кнопка и div с 3 различными классами. По нажатию на кнопку вывести в div нумерованный список с этими классами.


let button = document.querySelector(".btn_click");
if (button) {
    button.addEventListener("click", function () {

        let div = document.querySelector("#classList");
        
        console.log(classList.classList);

        let list = classList.classList.value;

        let classes = list.split(' ');
        console.log(classes);

        /*let out = "<ol>";
        classes.forEach((class) => {
            out += `<li>${class}</li>`;
        });
        out += "</ol>";
        div.insertAdjacentHTML("beforeend", out);*/

        div.innerHTML = `<ol><li>${classes[0]}</li><li>${classes[1]}</li><li>${classes[2]}</li></ol>`;
        
    });
}