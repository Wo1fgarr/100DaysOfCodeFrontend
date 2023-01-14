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
function module() {
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

const mod = module();
mod.addStr('abcde');
mod.getStr();
mod.getStrLength();
mod.getReversedStr();
console.log("===")
mod.addStr(5);
mod.getStr();
mod.getStrLength();


