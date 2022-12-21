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

// use regexp
 // let result = inputString.match(/[\d+\+\-\*\/]/g);
    // let output = 
    // console.log(result.length);
    // console.log(result);
    // console.log(result.join(''));

// simples expression
// let res = inputString.slice(0, 3);
    // res = inputString.slice(2, 5);
    // res = inputString.slice(4, 7);


// const getExpressions = (inputString) => {
//     let res = [];

//     for (let i = 0; i < inputString.length; i+=2) {
//         let endPos = 3;
//         let expression = inputString.slice(i, endPos + i);
//         if (expression.length >= 2) res.push(inputString.slice(i, endPos + i));
//     }

//     return res;
// }

// const getSignIndexes = (str) => {
    
//     console.log(str.indexOf(str.match(/[\+\-\*\/]/g)) + 1);
// }

// const getExpressions = (inputString) => {
//     let res = [];

//     for (let i = 0; i < inputString.length; i+=2) {
//         let endPos = 3;
//         let expression = inputString.slice(i, endPos + i);
//         if (expression.length >= 2) res.push(inputString.slice(i, endPos + i));
//     }

//     return res;
// }

// console.log(getExpressions('2+2+3-4'));
// searchSign('2+2+3-4*8/9')

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

let str = '25+233+32-41';

let res = str.matchAll(/[\+\-]/g);
res = Array.from(res);
// console.log(res[1].index);

for (let i = 0; i < str.length; i++) {
    let endPos = 0;

    for (let k = 0; k < res.length; k++) {
        if (res[k].index > 0) {
            endPos = res[k].index;
            console.log(endPos);
        }
        
    }

    console.log(str.slice(i, endPos - 1));
    // получить от 0 до endpos -1
}

// console.log(getSignIndexes('2+2+3-4'));
// let tests = getExpressions('2+2+3-4');
// tests.forEach(test => console.log(test));
// tests.forEach(test => console.log(test.indexOf(test.match(/[\+\-\*\/]/g)) + 1));

// найти по регулярному выражению индекс вхождения знака и вернуть его прибавив 1
// заменить всё начиная с указанного индекса до конца строки новым значением