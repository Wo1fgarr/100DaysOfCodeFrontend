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
    let getButtonType = event.target.textContent;
    let inputData = document.querySelector('#calc-input').value;

    if (inputData.length > 0) getButtonType = `${inputData}${getButtonType}`;

    document.querySelector('#calc-input').value = getButtonType;
});

// clear data
document.querySelector('#btn-clean').addEventListener('click', () => {
    document.querySelector('#calc-input').value = '';
    document.querySelector('.calc-output').innerHTML = '0';
});

// get results
const searchSign = (inputString) => {
    
}

const printResult = 
document.querySelector('#btn-result').addEventListener('click', () => {
    let inputData = document.querySelector('#calc-input').value;


    console.log(inputData);

    document.querySelector('.calc-output').innerHTML = inputData;
});
