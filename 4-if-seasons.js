// 4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//     Результат виводити в консоль.



let winter = 1;
let spring = 2;
let summer = 3;
let autumn = 4;

if (winter == 4){
    console.log('Summer')
} else if(winter ==2 ) {
    console.log('Spring')
}  else if(winter == 1){
    console.log('Winter')
}


let seasons = {
    number1: "Winter",
    number2: "Spring",
    number3: "Summer",
    number4: "Autumn"
}

if(seasons.number1 == "Spring"){
    console.log(seasons.number2)
} else if(seasons.number3 == "Winter"){
    console.log(seasons.number1)
} else if(seasons.number3 == "Summer"){
    console.log(seasons.number3)
}

let seasons2 = ["Winter", "Spring", "Summer", "Autumn"]

if (seasons2[1]= "Winter") {
    console.log(seasons2[1])
} else if (seasons2[0]= "Winter"){
    console.log(seasons2[0])
}



