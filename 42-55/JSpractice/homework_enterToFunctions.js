// 1
function multiply() {
    result = 1;
    if (arguments.length === 0) return result = 0;

    for (let j = 0; j < arguments.length; j++) {
        result *= arguments[j];
    } 

    return result;
}

console.log(multiply(2, 4, 5, 6));
console.log(multiply());


// 2
function reverseString(str) {
    let convertedToString = String(str);
    console.log(convertedToString.split('').reverse().join(''));
}

reverseString('test');
reverseString('');
reverseString(null);
reverseString(undefined);
reverseString();


// 3
function getCodeStringFromText(str) {
    console.log(typeof(str) === 'string');
    let result = '';
    if (typeof(str) === 'string' || typeof(str) === 'number' || typeof(str) === 'null' || typeof(str) === 'undefined') {
        let convertedToString = String(str);
        for ( let j = 0; j < convertedToString.length; j++){
           result = `${result} ${convertedToString.charCodeAt(j)}` 
        }
    }
    console.log(result.trim());
    // if (typeof(str) === string) console.log('boom')
}

getCodeStringFromText("hello");


// 4
function guessTheNumber(num) {
    if (num < 0 || num > 10 ) return new Error("Please provide number in range 0 - 10");
    if (isNaN(num)) return new Error("Please provide a valid number");
    let rand = Math.round(Math.random() * 10);

    if (rand === num) return "You win!";
    else return `You are lose, your number is ${num}, the random number is ${rand}`;
}

console.log(guessTheNumber(6));