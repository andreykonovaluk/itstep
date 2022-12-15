let animal = {
    name: "Барсик",
    color: "black",
}

let cat = {
    sound() {
        console.log("Meow");
    },
    __proto__: animal
}

let dog = {
    sound() {
        console.log('wowh');
    },
    __proto__: animal
}
dog.name = "Бим";
console.log(animal);
console.log(cat);
cat.sound();
console.log(dog.name);
dog.sound();
for (let key in cat) {
    console.log(key, cat[key]);
}
for (let key in dog) {
    console.log(key, dog[key]);
}