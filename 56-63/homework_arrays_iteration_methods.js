// 1
const arr = [1,2,3,5,8,9,10];

const digitsInfo = arr.map( el => {
    const digitinfo = {
        digit: el,
        odd: el % 2 === 0,
    }
    return digitinfo;
})

console.log(digitsInfo);

// 2
const arr2 = [12, 4, 50, 1, 0, 18, 40];

const isElNullable = arr2.some( el => {
    return el === 0;
})

console.log(isElNullable);

// 3
const arr3 = ['yes', 'hello', 'no', 'easycode', 'what'];

const isLengthThree = arr3.every( el => el.length > 3);

console.log(isLengthThree);

// 4
const arr4 = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
            {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
            {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];

function getPhrase() {
    arr4.sort( (el1, el2) => el1.index - el2.index );
    
    const test = arr4.map(el => {
        return el.char;
    })
    return test.join('');
}

console.log(getPhrase());

// 5
const arr5 = [ [14, 45], [1], ['a', 'c', 'd'] ];

console.log(arr5.sort());


// 6
const cpuInfo = [
    {cpu: 'intel', info: {cores:2, cache: 3}},
    {cpu: 'intel', info: {cores:4, cache: 4}},
    {cpu: 'amd', info: {cores:1, cache: 1}},
    {cpu: 'intel', info: {cores:3, cache: 2}},
    {cpu: 'amd', info: {cores:4, cache: 2}}
    ];

cpuInfo.sort( (el1,el2) => el1.info.cores - el2.info.cores);

console.log(cpuInfo);


// 7
let products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
    ];


function filterCollection(arr, a, b) {
    let res = arr.filter( n => {
        return n.price > a && n.price < b;
    })

    return res.sort( (el1, el2) => el1.price - el2.price);
}

console.log(filterCollection(products, 15, 30));
