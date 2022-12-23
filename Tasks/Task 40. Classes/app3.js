/*Задание #3
Рядом с мышью — и гусь велик, но вот рядом с драконом... В этой задаче у нас будут гуси (класс Goose) 
и драконы (класс Dragon). А также их предки, классы BigAnimal или SmallAnimal, кто чей предок — 
догадайтесь сами. Затем переопределите для Goose и Dragon метод getSize(), так, чтобы они выводили 
строки о размере животного.*/

class SmallAnimal {
    name;
    constructor(name){
        this.name = name;
    }
}

class Goose extends SmallAnimal{
    getSize(){
        console.log(this.name, "меньше, чем драконаны");
    }
}

class BigAnimal {
    name;
    constructor(name) {
        this.name = name;
    }
}

class Dragon extends BigAnimal{
    getSize() {
        console.log(this.name, "крупнее, чем гуси");
    }
}

let geese = new Goose('Гуси');
let dragons = new Dragon('Драконы');

console.log(geese);
console.log(dragons);

geese.getSize();
dragons.getSize();
