(() => {
  /** Data*/
  let numberValue = '';
  let a = '';
  let b = '';
  let sign = '';
  let finish = false;

  const digit = []

  /** Elements UI*/
  const ac = document.querySelector('[data-action="clear"]');
  const keysList = document.querySelector(".keys");
  const input = document.querySelector(".input");
  const output = document.querySelector(".output");


  /** Events*/
  // keysList.addEventListener("click", getResults);
  // check if the button is pressed
  ac.addEventListener('click', clearAll)
  keysList.addEventListener('click', isButton);

  /** Functions*/
  function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    output.textContent = 0;
  }

  function isButton(e) {
    // if pressed not a button
    if (!e.target.classList.contains("key")) {
      alert("No need press this element now. Please press the button!");
      return;
    };

    let isNumber = e.target.classList.contains("number");
    let isOperator = e.target.classList.contains("operator");

    // write number values
    if (isNumber) {
      // write to a value
      if (b === '' && sign === '') {
        a += e.target.dataset.key;
        console.log(a, b, sign);
        input.textContent = `${a}`;
      }
      else if (a !== '' && b !== '' && finish) {

      }
      else {
        // wtite to b value
        b += e.target.dataset.key;
        console.log(a, b, sign);
        input.textContent = `${a} ${sign} ${b}`;
      }
    }
    
    // write operator
    if (isOperator && e.target.dataset.operator !== '=') {
      sign = e.target.dataset.operator;
      console.log(a, b, sign);
      input.textContent += ` ${sign} `;
    }

    if (e.target.dataset.operator === '=') {
      switch (sign) {
        case "+":
          a = (+a) + (+b);
          break;
        case "-":
          a = (+a) - (+b);
          break;
        case "x":
          a = (+a) * (+b);
          break;
        case "-":
          a = (+a) / (+b);
          break;
      }
      finish = true;
      printIt(a);
    }
  }

  function printIt(val) {
    output.textContent = val;
    input.textContent = '';
    console.log(val);
  }

  //  function getKeys( el ) {
  //   let numbValue = ''
  //   let operValue = '+';
  //   let actionValue = '';
  //   if (el.classList.contains("number")) {
  //     numbValue = el.dataset.key;
  //     // console.log(numbValue);
  //   }
  //   else if (el.classList.contains("operator")) {
  //     operValue = el.dataset.operator;
  //     // console.log(operValue);
  //   }
  //   else if (el.classList.contains("action")) {
  //     actionValue = el.dataset.action
  //     // console.log(actionValue);
  //   }

  //   const result = createNewCalcParams(numbValue, operValue, actionValue);
  //   // console.log(result);
  //   return result;
  // }

  // function printValue(val) {
  //   const result = output.textContent = val;
  //   console.log(result);
  //   return result;
  // }

  // function createNewCalcParams(number = '', operator = '', action = '') {
  //   newParams = {
  //     number,
  //     operator,
  //     action
  //   }

  //   return { ...newParams };
  // }

  // function calculateValue() {
  //   let res = 0;
    
  //   return function(num, oper) {
  //       if (oper === '+') {
  //           res += num;
  //           console.log(res);
  //           return res;
  //       }
  //       else if (oper === '-') {
  //           res -= num;
  //           console.log(res);
  //           return res;
  //       }
  //       else if (oper === '*') {
  //           res *= num;
  //           console.log(res);
  //           return res;
  //       }
  //       else if (oper === '/') {
  //           res /= num;
  //           console.log(res);
  //           return res;
  //       }
  //   }  
  // }

  // let result = calculateValue();

  // function getResults( { target } ) {
  //   const params = getKeys(target);
  //   const { number, operator, action } = params;
  //   let a = parseInt(number);
  //   printValue(result(a, `${operator}`));
  // }
})();