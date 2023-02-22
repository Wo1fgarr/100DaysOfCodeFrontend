const btn = document.querySelector("button");
const container = document.querySelector(".container");

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

btn.addEventListener("click", e => {
  const fragment = document.createDocumentFragment();

  getUsers(response => {
    response.forEach(user => {
      const div = document.createElement("div");
      div.textContent = user.name;
      const subDiv = document.createElement("div");
      subDiv.textContent = `${user.email}\n${user.phone}\n${user.website}`;
      subDiv.classList.add("user-info");
      subDiv.classList.add("d-none");
      div.append(subDiv);
      fragment.appendChild(div);
    })
    container.append(fragment);
  });
});


// let currentOpenedMenu = null

// function toggleUserInfo(e) {
//   const menu = e.currentTarget.querySelector('.user-info');
//   const isAdded = menu.classList.toggle('d-none');
//   if (currentOpenedMenu && currentOpenedMenu !== menu) {
//     currentOpenedMenu.classList.add('d-none');
//   }
//   if (!isAdded) {
//     currentOpenedMenu = menu;
//   }
// }

// userInfo.forEach(d => d.addEventListener('click', toggleDropdownMenu));
