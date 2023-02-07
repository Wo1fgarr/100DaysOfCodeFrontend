(() => {

  /** Elements UI*/
  const keysList = document.querySelector(".keys");

  /** Events*/
  keysList.addEventListener("click", getKeys);

  /** Functions*/
   function getKeys( { target } ) {
    if (target.classList.contains("number")) {
      console.log(target.dataset.key);
      return target.dataset.key;
    }
    else if (target.classList.contains("operator")) {
      console.log(target.dataset.operator);
      return target.dataset.operator;
    }
    else if (target.classList.contains("action")) {
      console.log(target.dataset.action);
      return target.dataset.action;
    }
  }

  // нужна функция создающая объект с параметрами
  // по умолчанию параметры null

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

    function getResults() {
      // получаем объект и проверяем значение, крутим по циклу
      // пока не будет два аргумента
    }
}
  
})();