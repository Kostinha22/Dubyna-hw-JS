// 8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.
someText = 'My homework'
someNewText = 'This is the second example'

function textChange(someText, someNewText){
console.log(someText.replace(/[aeiouy]/gi, ''))
console.log(someNewText.replace(/[thscxmplnd]/gi, ''))
}
textChange('See the result with the english text', 'Some new text')

