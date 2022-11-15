//Разрабоать функцию для генерации случаного целого числа от min до max.

function generationRandomIntegerNumber(min, max){

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
generationRandomIntegerNumber(1, 100);