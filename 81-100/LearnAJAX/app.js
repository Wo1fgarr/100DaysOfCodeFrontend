// cb - callback function
// получаем элемент кнопку
const btn = document.querySelector("button");
// получаем контейнер
const container = document.querySelector('.container');

// составляем XHR запрос и запрашиваем данные от сервера
function getPosts(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET','https://jsonplaceholder.typicode.com/posts');

  // добавляем слушатель ответа
  xhr.addEventListener('load', () => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });

  // добавляем слушатель ошибки
  xhr.addEventListener('error', () => {
    console.log('error');
  });

  // отправляем запрос
  xhr.send();
}

function renderPosts(response) {
  const fragment = document.createDocumentFragment();
    response.forEach(post => {
      const card = document.createElement("div");
      card.classList.add('card');
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      const title = document.createElement('h5');
      title.classList.add('card-title');
      title.textContent = post.title;
      const article = document.createElement('p');
      article.classList.add('card-text');
      article.textContent = post.body;
      cardBody.appendChild(title);
      cardBody.appendChild(article);
      card.appendChild(cardBody);
      fragment.appendChild(card);
    });
  container.appendChild(fragment);
}

// запуск отправки запроса по нажатию кнопки 
// и на основе запроса строим на странице из полученных элементом
// обновленный UI
btn.addEventListener('click', e => {
  getPosts(renderPosts);
});

