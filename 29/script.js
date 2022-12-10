/* Numbers */
// get sum of two numbers
let firstNum = parseInt(prompt("Enter first numbers: "));
let secondNum = parseInt(prompt("Enter second number: "));
console.log(firstNum + secondNum);

// Repeat until the input is a number
function GetNumber() {
    let readNumber = prompt("Enter number");
    console.log(readNumber);
    if (readNumber === null || (readNumber != null && typeof readNumber !== "undefined")) {
        return null;
    }
    else if (isNaN(readNumber)) {
        readNumber = prompt("Enter number");
    }
    else if (isFinite(readNumber)) {
        return parseInt(readNumber);
    }
}

/* Strings */

