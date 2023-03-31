//2. Дано 2 поля ввода и кнопка. В каждое поле вводится время в формате "часы:минуты". При нажатии на кнопку найти разницу между временами, учитывая, что второе время больше первого и вывести разницу также в формате "часы:минуты"

let button = document.querySelector("button");
button.addEventListener("click", function(){
    let input1 = document.querySelector("#input1");
    let input1Value = input1.value;
    

    let input2 = document.querySelector("#input2");
    let input2Value = input2.value;
    
    
    let time1 = input1Value.split(":");
   
    let time2 = input2Value.split(":");
    

    let diff = ((time2[0] - time1[0]) * 60) + (time2[1] - time1[1]);

    let hour = Math.trunc(diff / 60); //возвращает целую часть числа
    let min = diff % 60;
    
    let p = document.querySelector("p");

    p.innerHTML = `${hour}:${min}`;

});