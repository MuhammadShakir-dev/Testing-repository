// create a object that contains basics calculation methods.

let calculator = {
    sum(x, y) { return  x + y },
    sub(x, y) { return x - y },
    mul(x, y) { return x * y },
    div(x, y) { return x / y },
}


console.log(calculator.sum(2, 3));
console.log(calculator.sub(10, 2));
console.log(calculator.mul(800 , 12));
console.log(calculator.div(800 , 12));
