/* UI */
const container = document.querySelector(".container");
const inputs = document.getElementsByTagName("input");
const button = document.querySelector("button");
const form = document.querySelector("form");


/* Events */
form.addEventListener('mouseover', e => {
  if (isAllInputsComplete() === true) {
    changeColorInputs();
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", "disabled");
    changeColorInputs();
  }
});

button.addEventListener("click", e => {
  let name = '';
      email = '',
      phone = '',
      website = '';

  for(let i = 0; i < inputs.length; i++) {
        if (inputs[i].classList.contains("user-name")) {
          name = inputs[i].value;
        }
        else if (inputs[i].classList.contains("user-email")) {
          email = inputs[i].value;
        }
        else if (inputs[i].classList.contains("user-phone")) {
          phone = inputs[i].value;
        }
        else if (inputs[i].classList.contains("user-website")) {
          website = inputs[i].value;
        }
  }
  const newPost = {
    title: name,
    body: {
      userEmail: email,
      userPhone: phone,
      userWebsite: website
    },
    userId: 1,
  };

  createPost(newPost, (response) => {
    const card = cardTemplate(response);
    container.insertAdjacentElement("beforeend", card);
  })
});


function cardTemplate(post) {
  const { body: {userEmail, userPhone, userWebsite} } = post;

  const card = document.createElement('div');
  card.classList.add('mt-3');
  card.classList.add('card');
  const cardHeader = document.createElement('div');
  cardHeader.classList.add('card-header')
  cardHeader.textContent = post.title
  const cardBody = document.createElement('ul');
  cardBody.classList.add('list-group','list-group-flush');
  const cardEmail = document.createElement('li');
  cardEmail.classList.add('list-group-item');
  cardEmail.textContent = userEmail;
  const cardPhone = document.createElement('li');
  cardPhone.classList.add('list-group-item');
  cardPhone.textContent = userPhone;
  const cardWebsite = document.createElement('li');
  cardWebsite.classList.add('list-group-item');
  cardWebsite.textContent = userWebsite;

  cardBody.append(cardEmail, cardPhone, cardWebsite);
  card.append(cardHeader, cardBody);

  return card;
}

function renderPosts(response) {
  const fragment = document.createDocumentFragment();
  response.forEach(post => {
    let card = cardTemplate(post);
    fragment.appendChild(card)
  })
  container.appendChild(fragment);
}

// get data from jsonplaceholder
function getPost(cb) {
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

// post data on jsonplaceholder
function createPost(body, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://jsonplaceholder.typicode.com/users");
  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });

  xhr.setRequestHeader("Content-type","application/json; charset=UTF-8");

  xhr.addEventListener("error", () => {
    console.log("error");
  });

  xhr.send(JSON.stringify(body));
}


// check inputs value
function isAllInputsComplete() {
  const arr = inputsValue();

  const result = arr.every((element) => {
    return element.length > 0;
  })

  return result;
}


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

function inputsValue() {
  const valueArr = [];
  
  for(let i = 0; i < inputs.length; i++) {
    valueArr.push(inputs[i].value);
  }

  return valueArr;
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





