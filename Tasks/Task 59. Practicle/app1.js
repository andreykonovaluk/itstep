//Создать ф-ию, которая принимает, в качестве аргументов 2 строки в формате даты: "чч.мм.гггг", которая сравнивает их между собой и возвращает 1, если 1ая дата>2ой, 0 если даты равны и -1, если 1ая дата<2ой.

data1 = "22.10.1990";
data2 = "21.10.1990";
function dateComparison(data1, data2){
    let data1Rev = data1.split(".").reverse();
    let data2Rev = data2.split(".").reverse();
   
    if (+data1Rev[0] > +data2Rev[0] || (+data1Rev[0] == +data2Rev[0] && +data1Rev[1] > +data2Rev[1]) || (+data1Rev[0] == +data2Rev[0] && +data1Rev[1] == +data2Rev[1] && +data1Rev[2] > +data2Rev[2])){
        return "1";
    } else if (+data2Rev[0] > +data1Rev[0] || (+data1Rev[0] == +data2Rev[0] && +data2Rev[1] > +data1Rev[1]) || (+data1Rev[0] == +data2Rev[0] && +data1Rev[1] == +data2Rev[1] && +data2Rev[2] > +data1Rev[2])){
        return "-1";
    } else{
        return "0";
    }

};
console.log(data1.split(".").reverse());
console.log(data2.split(".").reverse());
console.log(dateComparison("21.10.1990", "22.10.1990"));

