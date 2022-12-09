//1. Создайте пустой объект user.
let user = {};

//2. Добавьте свойство name со значением John.
user = {
    name: "John",
}

//3. Добавьте свойство surname со значением Smith.
user.surname = "Smith";

//4. Измените значение свойства name на Pete.
user.name = "Pete";

//5. Удалите свойство name из объекта.
delete user.name;
console.log(user);

//6. Пусть дан объект с зарплатами сотрудников. Найти сумму зарплат с использованием for..in.
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
sum = 0;
for (let key in salaries){
    sum += salaries[key];
}
console.log(sum);

/*7. Дан объект 
let user = {
  name: "Иван",
  age: 30
};
Написать код, который создает его точный клон (новый объект с такой же структурой).*/
    user = {
    name: "Иван",
    age: 30
};

let cloneUser = {};

for(let key in user){
    cloneUser[key] = user[key];
};
console.log(cloneUser);

let cloneUser2 = Object.assign({}, user);

console.log(cloneUser2);

/*8. Дан объект 
let user = {
  name: "Иван",
  sizes: {
    height: 182,
    width: 50
  }
};
Написать код, который создает его точный клон (новый объект с такой же структурой).*/
    user = {
    name: "Иван",
    sizes: {
        height: 182,
        width: 50
    }
};
let cloneUser3 = Object.assign({}, user);

console.log(user, cloneUser3);

for (let key in user) {
    if (typeof user[key] != "object")
        cloneUser[key] = user[key];
    else {
        cloneUser[key] = {};
        for (let key1 in user[key]) {
            cloneUser[key][key1] = user[key][key1];
        }
    }
}

console.log(user, cloneUser);