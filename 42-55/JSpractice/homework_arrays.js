// 1
function getArray(num) {
    const arr = [];

    for ( let j = 1; j <= num; j++) {
        arr.push(j);
    }
    
    return arr;
}

console.log(getArray(10));

// 2
function doubleArray(arr) {
    let result = arr.concat(arr); 
    return result;
}

console.log(doubleArray([1,2,3]));

// 3
function changeCollection() {
    for ( let k = 0; k < arguments.length; k++) {
        if (Array.isArray(arguments[k])) {
            arguments[k].shift();
        }
    }

    let result = [];
    for (const prop in arguments) {
        result.push(arguments[prop]);
    }

    return result;
}

console.log(changeCollection([1,2,3], ['a', 'b', 'c']));


// 4
const users = [
    {
      "_id": "5e36b779dc76fe3db02adc32",
      "balance": "$1,955.65",
      "picture": "http://placehold.it/32x32",
      "age": 33,
      "name": "Berg Zimmerman",
      "gender": "male"
    },
    {
      "_id": "5e36b779d117774176f90e0b",
      "balance": "$3,776.14",
      "picture": "http://placehold.it/32x32",
      "age": 37,
      "name": "Deann Winters",
      "gender": "female"
    },
    {
      "_id": "5e36b779daf6e455ec54cf45",
      "balance": "$3,424.84",
      "picture": "http://placehold.it/32x32",
      "age": 36,
      "name": "Kari Waters",
      "gender": "female"
    }
  ]
  
  
  function filterUsers(arr, key, value) {
    if (!Array.isArray(arr)) return new Error('The first argument should be an array');
    if (typeof key !== "string" || key === '') return new Error('The key should be a valid string');
    if (value === undefined || value === null) return new Error('The value should be a valid value.');

    let result = arr.filter(el => el[key] === value);
    return result;
  }
  
  console.log(filterUsers(users, "age", 36));