// 9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//     так щоб в консоль виводився результат обчислень з правильним закінченням.
//     Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

// 0 => 'ів' 
// 1 => без закінчення
// 2, 3, 4 => 'и'
// 5 і більше => 'ів' 
// 1.1, 0.1, 0,001, 0,0001 = 'a'



let meters = 10000
let kilometers = meters / 1000;
let message = '';
    
    if (meters === 0) {
      message = 'Нуль метрів';
    } else if (meters === 1) {
      message = '1 метр';
    } else if (meters % 10 === 1 && meters !== 11) {
      message = `${meters} метр`;
    } else if (meters % 10 >= 2 && meters % 10 <= 4 && (meters < 10 || meters > 20)) {
      message = `${meters} метри`;
    } else {
      message = `${meters} метрів`;
    }
    
    if (kilometers >= 1) {
      if (kilometers === 1) {
        message += ` це 1 кілометр`;
      } else if (kilometers % 10 === 1 && kilometers !== 11) {
        message += ` це ${kilometers} кілометр`;
      } else if (kilometers % 10 >= 2 && kilometers % 10 <= 4 && (kilometers < 10 || kilometers > 20)) {
        message += ` це ${kilometers} кілометри`;
      } else {
        message += ` це ${kilometers} кілометрів`;
      }
    } else {
      message += ` це ${kilometers} кілометрів`;
    }
    
    console.log(message);
  










 