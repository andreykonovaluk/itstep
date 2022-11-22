//Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
let a, b, c;
function differenceAndDivisionOfNumbers(a, b, c){
    let difference = a - b;
    let result = difference / c;
    return result;
}
let d = differenceAndDivisionOfNumbers(10, 2, 4);
console.log(d);
