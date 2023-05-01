// 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.


let a = 3;
let b = 2;

let operation = `-`

switch(operation){
    case '+':
        console.log(3)
        break;
    case '-':
        console.log(1)
        break;
    case '/':
        console.log(3)
        break;
    case '*':
        console.log(6)
        break; 
    case '===':
        console.log('false');
        break;
    default:
        console.log('Science!') 
        break;         
}