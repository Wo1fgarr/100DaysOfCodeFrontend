/* 1  A lot of callback function */
function firstFunc(arr, fn) {
    return `New value: ${fn(arr)}`;
}

// get string on array with change first symbol of every element to Upper Case
function handler1(el) {
    const elMap = el.map(elItem => {
        return elItem.charAt(0).toUpperCase()+elItem.slice(1);
    });
    return elMap.join('');   
}

console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));

// get string on array multiplication array element to 10
function handler2(el) {
    let result = '';
    el.map(elItem => {
        // return elItem * 10; my choice
        return result += `${elItem * 10}, `; //  teacher variant
    });
    // return elMap2.join(', '); my choice
    return result.trimEnd(); //  teacher variant
}

console.log(firstFunc([10, 20, 30], handler2) )

//get users name+years in string
function handler3(el) {
    let result = '';
    for (let j = 0; j < el.length; j++) {
        result += `${el[j]['name']} is ${el[j]['age']}, `;
    }
    return result.trimEnd();
}

console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3));

function handler4(el) {
    let result = '';
    const elMap4 = el.map( elItem => {
        return result += `${elItem.split('').reverse().join('')}, `; // teacher variant
        // return elItem.split('').reverse().join(''); my choice
    });
    // return elMap4.join(', '); my choice
    return result.trimEnd(); // teacher variant
}

console.log(firstFunc(['abs', '123'], handler4));


/* 2 every() analogue */ 
function every(arr, fn) {
    if ( !Array.isArray(arr) ) return new Error('first element must be an array');
    if ( typeof fn !== 'function' ) return new Error('second element must be a function');

    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i], i, arr)) {
          return false;
        }
    }
    
    return true;
}

function everyHandler(el) {
    return typeof el === 'number';
}

console.log(every([1,2,3,5,7,9,10], everyHandler));
console.log(every([12,22,31,52,72,91,10], everyHandler));
