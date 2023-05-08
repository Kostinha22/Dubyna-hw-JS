// 4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//     Результат виводити в консоль.

let seasonNumber = 3


function season (seasonNumber){
    if (seasonNumber == 1) {
    console.log('Winter')
} else if (seasonNumber == 2) {
    console.log('Spring')
} else if (seasonNumber == 3) {
    console.log('Summer')
} else if (seasonNumber == 4) {
    console.log('Autumn')
} else {
    console.log('there is only 4 seasons of the year')
}
}

season()