// дано 10 пронумерованных блоков. при нажатии цифры должен подсвечиваться соответствующий блок с номером

let divs = document.querySelectorAll(".box");
document.addEventListener("keypress", function(event){
    if (event.key == "0"){
        document.querySelector(".zero").style.background = "#f00";
    }
    if (event.key == "1") {
        document.querySelector(".one").style.background = "#f00";
    }
    if (event.key == "2") {
        document.querySelector(".two").style.background = "#f00";
    }
    if (event.key == "3") {
        document.querySelector(".three").style.background = "#f00";
    }
    if (event.key == "4") {
        document.querySelector(".four").style.background = "#f00";
    }
    if (event.key == "5") {
        document.querySelector(".five").style.background = "#f00";
    }
    if (event.key == "6") {
        document.querySelector(".six").style.background = "#f00";
    }
    if (event.key == "7") {
        document.querySelector(".seven").style.background = "#f00";
    }
    if (event.key == "8") {
        document.querySelector(".eight").style.background = "#f00";
    }
    if (event.key == "9") {
        document.querySelector(".nine").style.background = "#f00";
    }

    divs = document.querySelectorAll(".box");
    document.addEventListener("keyup", function (event) {
        if (event.key == "0") {
            document.querySelector(".zero").style.background = "#0f0";
        }
        if (event.key == "1") {
            document.querySelector(".one").style.background = "#0f0";
        }
        if (event.key == "2") {
            document.querySelector(".two").style.background = "#0f0";
        }
        if (event.key == "3") {
            document.querySelector(".three").style.background = "#0f0";
        }
        if (event.key == "4") {
            document.querySelector(".four").style.background = "#0f0";
        }
        if (event.key == "5") {
            document.querySelector(".five").style.background = "#0f0";
        }
        if (event.key == "6") {
            document.querySelector(".six").style.background = "#0f0";
        }
        if (event.key == "7") {
            document.querySelector(".seven").style.background = "#0f0";
        }
        if (event.key == "8") {
            document.querySelector(".eight").style.background = "#0f0";
        }
        if (event.key == "9") {
            document.querySelector(".nine").style.background = "#0f0";
        }
    });
});


