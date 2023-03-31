/*10. Реализовать следующую игру. Дана таблица с цветными карточками, одна сторона которых изначально красная, а другая - черная. Изначально, все карточки выложены красной стороной вверх. При нажатии на определенную карточку она меняет цвет и все, граничащие по строне с ней карточки, на противоложный.
Игра заканчивается, как только все карточки будут черным цветом вверх. Необходимо подсчитывать количество ходов.(играет 1 человек)(toggle)
*/

let div = document.querySelector(".game__field");
div.addEventListener("click", function (event) {
    
    let cell = event.target;
    console.log(cell);
    if (cell.classList.length != 2) {
        return false;
    }

    let index = cell.dataset.n;
    
    if (cell.classList.contains("red")) {
        cell.classList.remove("red");
        cell.classList.add("black");
    } else if (cell.classList.contains("black")) {
        cell.classList.remove("black");
        cell.classList.add("red");
    }
    if (index == 0){
        let nextCell = cell.nextElementSibling;
        let bottomСell = cell.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
        
        nextCell.classList.toggle("red");
        nextCell.classList.toggle("black");
        bottomСell.classList.toggle("red");
        bottomСell.classList.toggle("black");
    }
    if (index == 1 || index == 2){
        let previousCell = cell.previousElementSibling;
        let nextCell = cell.nextElementSibling;
        let bottomСell = cell.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
        
        previousCell.classList.toggle("red");
        previousCell.classList.toggle("black");
        nextCell.classList.toggle("red");
        nextCell.classList.toggle("black");
        bottomСell.classList.toggle("red");
        bottomСell.classList.toggle("black");
    }
    if(index == 3){
        let previousCell = cell.previousElementSibling;
        let bottomСell = cell.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
        
        previousCell.classList.toggle("red");
        previousCell.classList.toggle("black");
        bottomСell.classList.toggle("red");
        bottomСell.classList.toggle("black");
    }
    if (index == 4 || index == 8){
        let nextCell = cell.nextElementSibling;
        let bottomСell = cell.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
        let topCell = cell.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;

        nextCell.classList.toggle("red");
        nextCell.classList.toggle("black");
        bottomСell.classList.toggle("red");
        bottomСell.classList.toggle("black");
        topCell.classList.toggle("red");
        topCell.classList.toggle("black");
    }
    if (index == 7 || index == 11){
        let previousCell = cell.previousElementSibling;
        let bottomСell = cell.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
        let topCell = cell.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;

        previousCell.classList.toggle("red");
        previousCell.classList.toggle("black");
        bottomСell.classList.toggle("red");
        bottomСell.classList.toggle("black");
        topCell.classList.toggle("red");
        topCell.classList.toggle("black");
    }
    if(index == 12){
        let nextCell = cell.nextElementSibling;
        let topCell = cell.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;

        nextCell.classList.toggle("red");
        nextCell.classList.toggle("black");
        topCell.classList.toggle("red");
        topCell.classList.toggle("black");
    }
    if(index == 13 || index == 14){
        let previousCell = cell.previousElementSibling;
        let nextCell = cell.nextElementSibling;
        let topCell = cell.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;

        previousCell.classList.toggle("red");
        previousCell.classList.toggle("black");
        nextCell.classList.toggle("red");
        nextCell.classList.toggle("black");
        topCell.classList.toggle("red");
        topCell.classList.toggle("black");
    }
    if(index == 15){
        let previousCell = cell.previousElementSibling;
        let topCell = cell.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;

        previousCell.classList.toggle("red");
        previousCell.classList.toggle("black");
        topCell.classList.toggle("red");
        topCell.classList.toggle("black");
    }
    if (index == 5 || index == 6 || index == 9 || index == 10){
        let previousCell = cell.previousElementSibling;
        let nextCell = cell.nextElementSibling;
        let bottomСell = cell.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
        let topCell = cell.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;

        previousCell.classList.toggle("red");
        previousCell.classList.toggle("black");
        nextCell.classList.toggle("red");
        nextCell.classList.toggle("black");
        bottomСell.classList.toggle("red");
        bottomСell.classList.toggle("black");
        topCell.classList.toggle("red");
        topCell.classList.toggle("black");
    }

    /*let count = 0;

    let numberMoves = document.querySelector(".numberMoves");
    for(i = 0; i <= 15; i++){
        if(cell){
            count++;
        }
        numberMoves.innerHTML = `Колличество сделанных ходов =${count}`;
    }*/
    
});