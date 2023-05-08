// 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//     Результат виводити в консоль.

let price = 1500 ;

function compare(price){
    if (price >= 1000 && price <= 1900){
    console.log(`Ціна товару ${price}`)
} else if (price < 1000 ){
    console.log(`Ціна товару нижча ніж 1000`)
} else if (price > 1900) {
    console.log(`Ціна товару вища за 1900`)
}
}
compare(1)



