/* Homework - Loops */
// 1
str = 'i am in the easycode';

const firstSymbolToUpperCate = () => {
    const splitedStr = str.split(' ');
    let result = '';

    for ( let j = 0; j < splitedStr.length; j++) { 
        result = `${result}${splitedStr[j].charAt(0).toUpperCase() + splitedStr[j].slice(1)} `;
    }

    return result.trim();
}

console.log(firstSymbolToUpperCate());

// 2
str2 = 'tseb eht ma i';
const reverseStr = () => {
    let result = '';

    for (let j = str2.length - 1; j >= 0 ; j--) { 
        result += str2[j];
    }

    return result;
}

console.log(reverseStr());

// 3
const factorial = (n) => {
    result = 1;

    while (n) {
        result *= n--;
    }

    return result;
}
  
console.log( factorial(10) );

// 4
str3 = 'JavaScript is a pretty good language';

const firstSymbolToUpperCate2 = () => {
    const splitedStr = str3.split(' ');
    let result = '';

    for ( let j = 0; j < splitedStr.length; j++) { 
        result = `${result}${splitedStr[j].charAt(0).toUpperCase() + splitedStr[j].slice(1)}`;
    }

    return result;
}

console.log(firstSymbolToUpperCate2());

// 5 
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const oddElement = (a) => {
    for (val of a) {
        if (val % 2 !== 0) {
            console.log(val);
        }
    }
}

oddElement(arr);

// 6
let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
}

const getStrObjects = (obj) => {
    for (let key in obj) {
        if (isNaN(obj[key])) {
            obj[key] = obj[key].toUpperCase();
        }
    }

    return obj;
}

console.log(getStrObjects(list));
