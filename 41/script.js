/** LOGIC */
// Ariphmetic operations
const getResult = (str) => {
    let result = 0;
    if (str.search(/\+/) !== -1) {
        const arrOfnumbers = str.split(/\+/);
        const sumOfNumbers = arrOfnumbers.reduce((acc, number) => parseInt(acc) + parseInt(number));
        result = sumOfNumbers;
    }
    else if (str.search(/\-/) !== -1) {
        const arrOfnumbers = str.split(/\-/);
        const diffOfNumbers = arrOfnumbers.reduce((acc, number) => parseInt(acc) - parseInt(number));
        result = diffOfNumbers;
    }
    else if (str.search(/\*/) !== -1) {
        const arrOfnumbers = str.split(/\*/);
        const prodOfNumbers = arrOfnumbers.reduce((acc, number) => parseInt(acc) * parseInt(number));
        result = prodOfNumbers;
    }
    else if (str.search(/[/]/) !== -1) {
        const arrOfnumbers = str.split(/[/]/);
        const divOfNumbers = arrOfnumbers.reduce((acc, number) => parseInt(acc) / parseInt(number));
        result = divOfNumbers;
    }

    return result;
}

// work with numbers buttons
const listBtnNumber = document.querySelector('.calc-btn-numbers');
listBtnNumber.addEventListener('click', (event) => {
    let getButtonValue = event.target.textContent;
    let inputData = document.querySelector('#calc-input').value;

    if (inputData.length > 0) getButtonValue = `${inputData}${getButtonValue}`;

    document.querySelector('#calc-input').value = getButtonValue;
    console.log(getButtonValue);
});

// work with operation buttons
const listBtnOperations = document.querySelector('.calc-btn-operation');
listBtnOperations.addEventListener('click', (event) => {
    let outputContent = event.target.textContent;
    let inputData = document.querySelector('#calc-input').value;
    let outputData = document.querySelector('#calc-output').value;

    if (outputData.length > 0) {
        getButtonType = `${outputData}${inputData}`;
        outputContent = getResult(getButtonType);
        console.log(outputContent);
    }

    // document.querySelector('#calc-input').value = getButtonType;
    document.querySelector('#calc-output').value = outputContent;
    document.querySelector('#calc-input').value = '';
});

// clear data
document.querySelector('#btn-clean').addEventListener('click', () => {
    document.querySelector('#calc-input').value = '';
    document.querySelector('#calc-output').value = '';
});

// get results
const searchSign = (inputString) => {
    
}

const printResult = 
document.querySelector('#btn-result').addEventListener('click', () => {
    let inputData = document.querySelector('#calc-input').value;


    console.log(inputData);

    document.querySelector('#calc-output').innerHTML = inputData;
});
