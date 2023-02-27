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
  const newPost = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  };

  createPost(newPost, (response) => {
    const card = cardTemplate(response);
    container.insertAdjacentElement("beforeend", card);
  })
});

/* Function */
function cardTemplate(post) {
  const card = document.createElement('div');
  card.classList.add('mt-3');
  card.classList.add('card');
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  const title = document.createElement('h5');
  title.classList.add('card-title');
  title.textContent = post.title;
  const article = document.createElement('p');
  article.classList.add('card-text');
  article.textContent = post.body;
  cardBody.appendChild(title);
  cardBody.appendChild(article);
  card.appendChild(cardBody);

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
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

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
  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
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

