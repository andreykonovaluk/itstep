/*Задание #4
а) Создать класс Товар, имеющий переменные имя, цена, рейтинг. 
б) Создать класс Категория, имеющий переменные имя и массив товаров. 
    Создать несколько объектов класса Категория. 
в) Создать класс Basket, содержащий массив купленных товаров. 
г) Создать класс User, содержащий логин, пароль и объект класса Basket. Создать объект класса User.*/
class Product{
    name;
    price;
    rating;
    constructor(name, price, rating){
        this.name = name;
        this.price = price;
        this.rating = rating;
    }
}
class Category{
    name;
    arrayProduct = [];
    constructor(name, arrayProduct){
        this.name = name;
        this.arrayProduct = arrayProduct;
    }

}