const inputs = document.getElementsByTagName("input");
const button = document.querySelector("button");
const form = document.querySelector("form");


form.addEventListener('mouseover', e => {
  if (checkInputs() === true) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", "disabled");
  }
});

function checkInputs() {
  const valueArr = [];
  for(let i = 0; i < inputs.length; i++) {
    valueArr.push(inputs[i].value);
  }

  const isAllValueComplete =  valueArr.every((element, index, array) => {
    return element.length > 0;
  })

  return isAllValueComplete;
}