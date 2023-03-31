//6. Дан квадрат. При наведении на квадрат сделать так, чтобы при движении мыши квадрат двигался вместе с курсором мыши. Курсор должен находится в центре квадрата.(position:Fixed)

let square = document.querySelector(".square");
square.addEventListener("mouseover", function (event) {   // (1) отследить нажатие
    square.style.position = 'absolute';   // (2) подготовить к перемещению:
    square.style.zIndex = 1000;   // разместить поверх остального содержимого и в абсолютных координатах

    
    moveAt(event.pageX, event.pageY);   //установим абсолютно спозиционированный мяч под курсор

    function moveAt(pageX, pageY) {
        square.style.left = pageX - square.offsetWidth / 2 + 'px';   //offsetWidth - возвращает ширину макета элемента в виде целого числа.
        square.style.top = pageY - square.offsetHeight / 2 + 'px'; 
    }  // передвинуть квадрат под координаты курсора и сдвинуть для центрирования

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove); //перемещение квадрата по экрану

    square.addEventListener("mouseup", function () {   //положить квадрат, удалить более ненужные обработчики событий
        document.removeEventListener('mousemove', onMouseMove);
        square.onmouseup = null;
    });
    
});
