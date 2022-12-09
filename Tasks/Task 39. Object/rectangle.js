let Rectangle = {
    a: 0,
    b: 0,
    perimeter: function(){
        return (this.a+this.b) * 2;
    },
    square: function(){
        return this.a * this.b;
    }
}
Rectangle.a = 10, Rectangle.b = 8;
let per = Rectangle.perimeter();
let sqr = Rectangle.square();
console.log(per);
console.log(sqr);