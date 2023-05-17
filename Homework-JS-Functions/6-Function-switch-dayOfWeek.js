// 6.  Задано номер дня тижня.
//     За заданим номером вивести назву дня тижня використовуючи switch.
    // Результат виводити в консоль.

   let day = 3;

   function dayCheck(day){ 
    switch(day){
        case 1:
            console.log('Sunday')
            break;
        case 2:
            console.log('Monday')
            break;
        case 3:
            console.log('Tuesday')
            break;
        case 4:
            console.log('Wednesday')
            break;
        case 5:
            console.log('Thursday')
            break;
        case 6:
            console.log('Friday')
            break;
        case 7:
            console.log('Saturday')
            break;
        default:
            console.log('Зараз зима а здається що ніч') 
            break;         
    }
   }

   dayCheck(5)


