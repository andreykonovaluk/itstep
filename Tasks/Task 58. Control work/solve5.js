//5. Написать функцию, принимающая на вход массив дат и сортирующая их в порядке возрастания.(функция sort или через объект "Date").

function datesSorting(dates){

    dates.forEach((data) => {
        dates.sort((a, b) => new Date(a) - new Date(b));
    });
    return dates;
}

let dates = ["1990-10-22", "1992-01-08", "2020-01-03", "1992-03-09", "2023-03-31"];

console.log(datesSorting(dates));