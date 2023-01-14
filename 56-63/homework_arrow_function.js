// 1
const sum = (...args) => {
    if (!args.length) return 0;
    return args.reduce((prev, next) =>  prev + next);
}
    
console.log(sum(1, 2, 3, 4)); // 10
console.log(sum()); // 0

// 2
const convertToObject = num => {
    const obj = {
        value: num,
        isOdd: Boolean(num % 2)
    }
    return obj; 
}

console.log(convertToObject(3));