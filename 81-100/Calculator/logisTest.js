function getResult() {
    let res = 0;
    
    return function(num, oper) {
        if (oper === '+') {
            res += num;
            console.log(res);
            return res;
        }
        else if (oper === '-') {
            res -= num;
            console.log(res);
            return res;
        }
        else if (oper === '*') {
            res *= num;
            console.log(res);
            return res;
        }
        else if (oper === '/') {
            res /= num;
            console.log(res);
            return res;
        }
    }
}

// get result
let result = getResult();
result(4,'+');
result(18,'+');
result(4,'+');
result(20,'-');
result(2,'*');
result(2,'/');