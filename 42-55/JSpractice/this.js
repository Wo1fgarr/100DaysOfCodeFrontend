// 1
function getSquare() {
    console.log(this.width * this.height);
    return this;
}

const rectangle = {
    width: 45,
    height: 32,
    getSquare,
};

rectangle.getSquare();

// 2
function getPrice() {
    console.log(this.price);
    return this;
}

function getPriceWithDiscount() {
    let getDiscount = parseInt(this.discount) / 100;
    console.log(this.price - (this.price * getDiscount));
}

const price = {
    price: 10,
    discount: '15%',
    getPrice,
    getPriceWithDiscount,
};

price.getPrice(); // 10
price.getPriceWithDiscount(); // 8.5

// 3 
function increaseHeight() {
    console.log(this.height += 1);
}

const params = {
    height: 10,
    increaseHeight,
}

params.increaseHeight();
console.log(params.height);

// 4
const numerator = {
    value: 1,
    double: function () { 
        console.log(this.value *= 2);
        return this; 
    },
    plusOne: function () { 
        console.log(this.value += 1);
        return this; 
    },
    minusOne: function () { 
        console.log(this.value -= 1);
        return this;
    },
}

numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value);

// 5
function getTotalPrice() {
    console.log(this.priceForOneProduct * this.productCount);
}
const productsSet1 = {
    priceForOneProduct: 100,
    productCount: 35,
    getTotalPrice,
}

productsSet1.getTotalPrice();

// 6
const productsSet2 = {
    priceForOneProduct: 100,
    productCount: 35,
    getTotalPrice,
}

const productsSet3 = {
    priceForOneProduct: 450,
    productCount: 50,
}

productsSet3.getTotalPrice = productsSet2.getTotalPrice;
productsSet3.getTotalPrice();

// 7
let sizes = {
    width: 5, 
    height: 10
}

getSquare = function () {
    return this.width * this.height
};

console.log(getSquare.call(sizes));

// 8
let element = {
    height: 25,
    getHeight: function() {
        return this.height;
    }
};
        
let getElementHeight = element.getHeight.bind(element);    
console.log(getElementHeight()); 