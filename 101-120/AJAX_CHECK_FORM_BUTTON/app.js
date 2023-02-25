const inputs = document.getElementsByTagName("input");
const button = document.querySelector("button");
const form = document.querySelector("form");
const checkbox = document.querySelector("#user-data");


form.addEventListener('mouseover', e => {
  if (isAllInputsComplete() === true) {
    changeColorInputs();
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", "disabled");
    changeColorInputs();
  }
});

checkbox.addEventListener("click", e => {
  // if checkbox checked - print user data to form
  if (e.target.checked && !isAllInputsComplete()) {
    getUsers(response => {
      const userList = [];
      response.forEach(u => {
        userList.push(u);
      })
      let user = userList[0];
      console.log(user);
      printUserData(user);
    });
  } else {
    console.log(`isAllInputsComplete = ${isAllInputsComplete()}`);
  }
});

function changeColorInputs() {
  const emptyInputs = findEmptyInput();
  const inputsArr = Array.from(inputs);

  if (emptyInputs.length === 0) {
    inputsArr.forEach( el => {
      el.classList.remove("isEmptyInput");
    });
  };

  emptyInputs.forEach(element => {
    let emptyInput = inputsArr.filter( el => el.classList.contains(element));
    console.log(emptyInput[0]);
    emptyInput[0].classList.add("isEmptyInput");
  });
}

function findEmptyInput() {
  const emptyInputsClassName = [];

  for(let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === '') {
      console.log(inputs[i].id);
      emptyInputsClassName.push(inputs[i].id);
    }
  }

  return emptyInputsClassName;
}

function printUserData(data) {
  for(let i = 0; i < inputs.length; i++) {
    if (inputs[i].classList.contains("user-name")) {
      inputs[i].value = data.name;
    }
    else if (inputs[i].classList.contains("user-email")) {
      inputs[i].value = data.email;
    }
    else if (inputs[i].classList.contains("user-phone")) {
      inputs[i].value = data.phone;
    }
    else if (inputs[i].classList.contains("user-website")) {
      inputs[i].value = data.website;
    }
  }
}

// check inputs value
function isAllInputsComplete() {
  const arr = inputsValue();

  const result = arr.every((element) => {
    return element.length > 0;
  })

  return result;
}

function inputsValue() {
  const valueArr = [];
  
  for(let i = 0; i < inputs.length; i++) {
    valueArr.push(inputs[i].value);
  }

  return valueArr;
}

// get data from jsonplaceholder
function getUsers(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });

  xhr.addEventListener("error", () => {
    console.log("error");
  });

  xhr.send();
}

