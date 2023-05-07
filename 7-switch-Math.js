// 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.


let a = 234;
let b = 234;
let operation = `-`
let result 

switch(operation){
    case '+': result = a + b;
        console.log(result)
        break;
    case '-': result = b - a;
        console.log(result)
        break;
    case '/': result = a / b;
        console.log(result) 
        break;
    case '*': result = a * b;
        console.log(result)
        break;
    default:
        console.log('Zero result') 
       
}