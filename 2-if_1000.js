// 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//     Результат виводити в консоль.

let price = 1500 ;

if (price <= 1000 || price <= 1900){
    console.log('Ціна товару дорівнює ' + price)
} else {
    console.log('Ціна вища ніж 1900')
};

if (price < 1000){
    console.log('Ціна вища ніж 100')
} else if(price > 1900){
    console.log('Ціна менше ніж 1900')
} else if (price == 1500){
    console.log(price)
};



