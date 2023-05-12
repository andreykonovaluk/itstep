//12. Даны поля, в которых вводятся номер месяца и год. Вывести в HTML календарь на этот месяц в виде таблицы.(через объект Date!)

function createCalendar(elem, year, month) {

    let mon = month - 1;
    let d = new Date(year, mon);

    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }

    while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) {
            table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
    }

    if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }

    table += '</tr></table>';

    elem.innerHTML = table;
}

function getDay(date) {
    let day = date.getDay();

    if (day == 0) {
        day = 7;
    }

    return day - 1;
}

let button = document.querySelector("#button");

if(button){
    button.addEventListener("click", function(){    //СОБЫТИЕ НА КЛИК ИЛИ CHANGE???
        let input1 = document.querySelector('#month');
        let input2 = document.querySelector('#year');

        let input1Value = input1.value;
        let input2Value = input2.value;

        createCalendar(calendar, input2Value, input1Value);
    });
}