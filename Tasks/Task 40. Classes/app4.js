/*Задание #4
а) Создать класс Товар, имеющий переменные имя, цена, рейтинг. 
б) Создать класс Категория, имеющий переменные имя и массив товаров. 
    Создать несколько объектов класса Категория. 
в) Создать класс Basket, содержащий массив купленных товаров. 
г) Создать класс User, содержащий логин, пароль и объект класса Basket. Создать объект класса User.*/
class Product{
    nameProduct;
    price;
    rating;

    constructor(nameProduct, price, rating){
        this.nameProduct = nameProduct;
        this.price = price;
        this.rating = rating;
    }
}

class Category{
    nameCategory;
    arrayProduct;

    constructor(nameCategory, arrayProduct = []){
        
        this.nameCategory = nameCategory;
        this.arrayProduct = arrayProduct;
    }
}

class Basket{
    purchasedGoods;
    constructor(purchasedGoods = []){
        this.purchasedGoods = purchasedGoods;
    }
}

class User{
    login;
    password;
    constructor(login, password){
        this.login = login;
        this.password = password;
    }
}

let shampoo = new Product("Shauma Shampoo", "10 рублей", 4.2);
let shavingGel = new Product("Gillette", "14 рублей", 4.6);
let beefMeat = new Product("Фермерская", "27 рублей", 4.8);
let milk = new Product("Лепелька", "1.83 рубля", 4.1);

let foodStuffs = new Category("Продукты", [milk, beefMeat]);
let nonGroceryGoods = new Category("Бытовая химия", [shampoo, shavingGel]);
console.log(foodStuffs, nonGroceryGoods);

let purchases = new Basket([beefMeat, shavingGel]);
console.log(purchases);

let stacy = new User("Tank1990", '********');
console.log(stacy);