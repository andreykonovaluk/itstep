/*4. Даны поле поле ввода и кнопка. Реализовать игру в города для 2 игроков
    - сначала первый игрок вводит город, а второй должен ввести другой город, который должен начинаться на последнюю букву города первого игрока и т.д..Если на такую букву городов не может быть(ь, ъ, ы, ё), то должна браться предпоследняя буква.
    - все города должны выводится в 2 блока, причем в каждый блок должны выводится города только одного игрока.
    - предусмотреть вариант, чтобы нельзя было вводить один и тот же город 2 раза.
    */

    
let field = document.querySelector('#field');
let btn = document.querySelector('.btn');
let div = document.querySelector('div');
let tbody = document.querySelector("tbody");
let cities = [];

btn.addEventListener("click",function(){

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    tr.insertAdjacentElement("afterbegin", td1);
    tr.insertAdjacentElement("beforeend", td2);
    tbody.insertAdjacentElement("beforeend", tr);

    

    let isTrue = cities.every((city, index, array) => { //array == words, word == array[index]    
        if (index > 0) {
            if (city[0].toLowerCase() == array[index - 1].slice(-1).toLowerCase()) { //array[index - 1] - предыдущее слово, slice(-1) - последняя буква
                return true;
            }
            return false;
        }
        return true;
    });

    console.log(isTrue);


    
   
    if(isTrue){
        cities.push(field.value);
        
    } else{
        cities.pop(field.value);
        div.innerHTML += `Неправильно введен город<br>`;
    }
    
    cities.forEach((city, index) => {
        if (index % 2 == 0) {
            td1.innerText = city;
            td2.innerText = "";
        }
        if (index % 2 != 0) {
            td2.innerText = city;
            td1.innerText = "";
        }
    });

    
    
    console.log(cities);
});
