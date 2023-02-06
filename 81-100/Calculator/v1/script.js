(() => {

  /** Elements UI*/
  const keysList = document.querySelector(".keys");

  /** Events*/
  keysList.addEventListener("click", getKeys)

  /** Functions*/
  // check value is number
  function isNumber(value) {
    if ( !isNaN(value) && value !== null ) {
      console.log(parseInt(value));
    }
  }

  // check operator
  function isOperator(value) {
    if ( isNaN(value) && value !== null && value !== undefined ) {
      console.log(value);
    }
  }

  function isAction(value) {
    if ( isNaN(value) && value !== null && value !== undefined ) {
      console.log(value);
    }
  }

  // get key value
  function getKeys( { target } ) {
    if (target.closest(".key")) {
      const keyValue = target.dataset.key;
      isNumber(keyValue);
    }
    
    if (target.closest(".operator")) {
      const keyValue = target.dataset.key;
      isOperator(keyValue);
    }

    if (target.closest(".action")) {
      const keyValue = target.dataset.key;
      isAction(keyValue);
    }
  }
})();