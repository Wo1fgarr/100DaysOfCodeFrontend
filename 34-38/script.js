const printNumbers = () => {
    const parent = document.querySelector('.calc-btn-numbers');
    const child = parent.getElementsByTagName('button');
    console.log(child);

    // here need to take one value of button then clicked
    for (let i = 0; i < child.length; ++i) {
        const button = child[i];
        console.log(button.textContent)
    }
}

// const printNumbers = () => {
//     console.log(this.textContent);
//     console.log('work');
// }

const outputResult = () => {
    let inputData = document.querySelector('#calc-input').value;
    console.log(inputData);
    document.querySelector('.calc-output').innerHTML = inputData;
}

const addPlus = () => {
    let btnPlusValue = document.querySelector('#btn-plus').textContent;
    let inputData = document.querySelector('#calc-input').value;

    if (inputData.length > 0) {
        btnPlusValue = `${inputData}${btnPlusValue}`;
    }

    document.querySelector('#calc-input').value = btnPlusValue;
}

const clearData = () => {
    document.querySelector('#calc-input').value = '';
    document.querySelector('.calc-output').innerHTML = '0';
    
}

document.querySelector('#btn-result').addEventListener('click', outputResult);
document.querySelector('#btn-plus').addEventListener('click', addPlus);
document.querySelector('#btn-clean').addEventListener('click', clearData);

// const parentNumbersBtn = document.querySelector('.calc-btn-numbers');
// const childNumbersBtn = parentNumbersBtn.getElementsByTagName('button');

// for (let i = 0; i < childNumbersBtn.length; ++i) {
//     const button = childNumbersBtn[i];
//     button.addEventListener('click', printNumbers);
// }


// const buttons = document.getElementsByTagName('button');
// for (let i = 0; i < buttons.length; ++i) {
//     const button = buttons[i];
//     button.addEventListener('click', printNumbers);
// }

document.querySelector('.calc-btn-numbers').addEventListener('click', printNumbers);