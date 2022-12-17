const outputResult = () => {
    let inputData = document.querySelector('#calc-input').value;
    console.log(inputData);
    document.querySelector('.calc-output').innerHTML = inputData;
}

const addPlus = () => {
    let btnPlusValue = document.querySelector('#btn-plus').textContent;
    document.querySelector('#calc-input').value = btnPlusValue;
}

document.querySelector('#btn-result').addEventListener('click', outputResult);
document.querySelector('#btn-plus').addEventListener('click', addPlus);
