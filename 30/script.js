/* Strings */
console.log("***Strings***");
const sayHi = "Hello, world!";
let checkTypeOfValue = typeof(sayHi);
let indexOfChar = sayHi.indexOf("H");
let sayHiSubString = sayHi.substring(1, 3);
let sayHiSubStringWithIndexOf = sayHi.substring(sayHi.indexOf("e"), 4);
let sayHiToUpperCase = sayHi.toUpperCase();
let sayHiToLowerCase = sayHi.toLowerCase();
let sayHiLength = sayHi.length;

console.log(`Set upper case of value variable sayHi -> ${sayHiToUpperCase}`);
console.log(`Set lower case of value variable sayHi -> ${sayHiToLowerCase}`);
console.log(`Get length of value variable sayHi -> ${sayHiLength}`);
console.log(`Get type of value variable sayHi: type is -> ${checkTypeOfValue}`);
console.log(`String method indexOf for input string ${sayHi}: index char H -> ${indexOfChar}`);
console.log(`String method substring for input string ${sayHi} -> ${sayHiSubString}`);
console.log(`String method substring for input string ${sayHi} with indexOf method -> ${sayHiSubStringWithIndexOf}`);

/* Boolean */
console.log("\n***Boolean***");

const emptyUserScring = '';
console.log(`The boolean value of variable emptyUserScring -> ${Boolean(emptyUserScring)}`);

/* Object */
console.log("\n***Object***");

const bookOne = {
    'title': "Harry Potter",
    'pages': 1234,
    'isFinished': true
}

const bookTwo = {
    'title': "Harry Potter",
    'pages': 5000
}

bookTwo.isFinished = false;

console.log(`resulr of compare bookOne to bookTwo is -> ${bookOne === bookTwo}`);
console.log(`a new parameter of the bookTwo it isFinished with value -> ${bookTwo.isFinished}`);

/* typeof */
console.log("\n***typeof***");

const printHiFunc = function isFunction() { confirm.log("Hi!"); }

console.log(`The type of isFunction -> ${typeof printHiFunc}`);


