//3. Дан список из 10 чисел в виде маркированного списка.  При наведении на четный элемент списка он подсвечивает красным цветом, а на нечетный элемент списка - синим.

let ul = document.querySelector("ul");
ul.addEventListener("mouseover", function(event){
    let li = document.querySelectorAll("li");
    Array.from(li).forEach((li, i) => {
        
        if (li[i] % 2 == 0){
            event.target.style.background = "#f00";
        } else if (li[i] % 2 != 0) {
            event.target.style.background = "#00f";
        }
    })
    
});

ul.onmouseout = function (event) {
    event.target.style.background = "#fff";
}