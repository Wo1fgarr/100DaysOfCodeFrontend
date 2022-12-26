// //reverse string
// const encrypt = (text) => {
//     let results = '';
//     for (let i = 0; i < text.length; i++) {
//     //   console.log(text.slice(i, i+2).split("").reverse().join(""));
//       results += text.slice(i, i+2).split("").reverse().join("");
//       i += 1;
//     }
//     return results;
// }
// console.log(encrypt('move')); // 'omev'
// console.log(encrypt('attack')); // 'taatkc'


/**
 * разбить массив на подстроки
 * пробежаться по ним поиском по нескольким условиям с циклом
 * если одно * или / - считаем, затем собираем заново собираем массив
 * !собираем массив не просто сбором, а вместо второго аргумента выражения, стоящего слева вносим результат (тут нужна функция, меняющая один элемент на другой и позвращающая полученную строку), и так везде
 * если несколько * или / - смотрим, у какого знака индекс меньше - выражение с этим знаком считаем первым - затем заново собираем массив и на новый круг
 * после всех операций с * и / тоже самое проделываем с + и -
 * цикл заканчивается тогда, когда в массиве длина будет равна 1
 */

// getSignIndexes('2+2+3-4');

// let str = '25+233*32-41*3\\2';
// let searchStr = '25-233';
let searchStr = '233\/100';

// console.log(str.split(/\+/));
const getResult = (str) => {
    let result = 0;
    if (str.search(/\+/) !== -1) {
        const arrOfnumbers = str.split(/\+/);
        const sumOfNumbers = arrOfnumbers.reduce((acc, number) => parseInt(acc) + parseInt(number));
        result = sumOfNumbers;
    }
    else if (str.search(/\-/) !== -1) {
        const arrOfnumbers = str.split(/\-/);
        const diffOfNumbers = arrOfnumbers.reduce((acc, number) => parseInt(acc) - parseInt(number));
        result = diffOfNumbers;
    }
    else if (str.search(/\*/) !== -1) {
        const arrOfnumbers = str.split(/\*/);
        const prodOfNumbers = arrOfnumbers.reduce((acc, number) => parseInt(acc) * parseInt(number));
        result = prodOfNumbers;
    }
    else if (str.search(/[/]/) !== -1) {
        const arrOfnumbers = str.split(/[/]/);
        const divOfNumbers = arrOfnumbers.reduce((acc, number) => parseInt(acc) / parseInt(number));
        result = divOfNumbers;
    }

    return result;
}

console.log(getResult(searchStr));

/**
 * нужно используя параметры выше получать по очереди операционные выражения из строки
 * затем циклом получить из результаты и циклом в исходной строке заменить из значения результатом
 * затем повторить операцию с знаками идущими ниже по приоритету
 * пока строка не будет содержать одно число
 */

// ввод-вывод
let getInputValue = document.querySelector('#i-1');

getInputValue.addEventListener('input', function(){
  document.getElementById('.out').innerHTML = this.value;
});