(() => {

  /** Elements UI*/
  const keysList = document.querySelector(".keys");
  const output = document.querySelector(".output");

  /** Events*/
  keysList.addEventListener("click", getResults);

  /** Functions*/
   function getKeys( el ) {
    let numbValue = ''
    let operValue = '+';
    let actionValue = '';
    if (el.classList.contains("number")) {
      numbValue = el.dataset.key;
      // console.log(numbValue);
    }
    else if (el.classList.contains("operator")) {
      operValue = el.dataset.operator;
      // console.log(operValue);
    }
    else if (el.classList.contains("action")) {
      actionValue = el.dataset.action
      // console.log(actionValue);
    }

    const result = createNewCalcParams(numbValue, operValue, actionValue);
    // console.log(result);
    return result;
  }

  function printValue(val) {
    const result = output.textContent = val;
    console.log(result);
    return result;
  }

  function createNewCalcParams(number = '', operator = '', action = '') {
    newParams = {
      number,
      operator,
      action
    }

    return { ...newParams };
  }

  function calculateValue() {
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

  let result = calculateValue();

  function getResults( { target } ) {
    const params = getKeys(target);
    const { number, operator, action } = params;
    let a = parseInt(number);
    printValue(result(a, `${operator}`));
  }
})();