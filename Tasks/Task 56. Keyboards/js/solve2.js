/*2. Дано поле ввода и абзац.
- при наборе текста в input выводить текст в абзац;
- запретить ввод пробела в поле ввода.   
*/
let input = document.querySelector("input");
input.addEventListener("keyup", function(){
    let inputValue = document.querySelector("input").value;
    let p = document.querySelector("p");
    p.innerText = inputValue;
    document.addEventListener("keypress", function(event){
        if(event.key == " "){
            event.preventDefault();
        }
    });
});