/* Numbers */
// 1 get PI to round 2
const getPi = Math.PI;
console.log(getPi.toFixed(2));

// 2 get max and min
let min = Math.min(15,11,16,12,51,12,13,51);
let max = Math.max(15,11,16,12,51,12,13,51);

console.log(min, max);

//3 get Random numbers
//a get Random numbers and round to 2
rand1 = Math.random();
console.log(rand1.toFixed(2));
//b get Random numbers(0, x) and round to 2
rand2 = Math.round(Math.random(0, 5) * 10);
console.log(rand2);

// 4
let normalRoundedNum = 0.6 + 0.7;
console.log( normalRoundedNum );
console.log( normalRoundedNum.toFixed(1) );

// 5
let someStr = '100$';
console.log(parseInt(someStr));

