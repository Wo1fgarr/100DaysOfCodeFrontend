// 1
function minus(value = 0) {
    return function(num = 0) {
        return value - num;
    }
}

console.log(minus(10)(6));
console.log(minus(5)(6));
console.log(minus(10)());
console.log(minus()(6));
console.log(minus()());

console.log("=========")

// 2
function multiplyMaker(val) {
    let x = val;
    return function(num) {
        console.log(`'это x: ${x}, а это num ${num}`);
        x *= num;
        console.log(x);
    }
}

let multiply = multiplyMaker(2)
multiply(2); // 4 (2 * 2)
multiply(1); // 4 (4 * 1)
multiply(3); // 12 (4 * 3)
multiply(10); // 120 (12 * 10

// 3
function changeString() {
    let str = '';
    return {
        addStr(val) {
            if (val.length === 0) return str = '';
            else if (!isNaN(val)) return str = val.toString();

            return str = val;
        },
        getStr() {
            console.log(str);
        },
        getStrLength() {
            console.log(str.length);
        },
        getReversedStr() {
            console.log(str.split('').reverse().join(''));
        }
    }
}

const mod = changeString();
mod.addStr('abcde');
mod.getStr();
mod.getStrLength();
mod.getReversedStr();
console.log("===")
mod.addStr(5);
mod.getStr();
mod.getStrLength();


// 4
function calculator() {
    let result = 0;

    return {
        addValue(val) {
            result = val;
            console.log(result);
            return this;
        },
        getSum(val) {
            result += val;
            console.log(result);
            return this;
        },
        getSubtract(val){
            result -= val;
            console.log(result);
            return this;
        },
        getMultiply(val) {
            result *= val;
            console.log(result);
            return this;
        },
        getDivide(val) {
            result /= val;
            console.log(result);
            return this;
        },
        getPow(val) {
            result = Math.pow(result, val);
            console.log(result);
            return this;
        },
        getFivalResult() {
            result = result.toFixed(2);
            console.log(result);
            return result;
        }
    }
}

console.log("====4====");
let calc = calculator();
calc.addValue(10);
calc.getSum(5);
calc.getMultiply(2);
console.log("========");
let calc2 = calculator()
calc2.addValue(10).getPow(2).getFivalResult();



