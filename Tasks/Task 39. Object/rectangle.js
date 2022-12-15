let Rectangle = {
    a: 0,
    b: 0,
    getPerimeter: function(){
        return (this.a+this.b) * 2;
    },
    getSquare: function(){
        return this.a * this.b;
    }
}
Rectangle.a = 10, Rectangle.b = 8;
let per = Rectangle.getPerimeter();
let sqr = Rectangle.getSquare();
console.log(per);
console.log(sqr);