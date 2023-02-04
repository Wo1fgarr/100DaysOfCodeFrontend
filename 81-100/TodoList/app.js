const tasks = [
  {
    _id: '5d2ca9e2e03d40b326596aa7',
    completed: true,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095c1288e0',
    completed: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
  {
    _id: '5d2ca9e2e03d40b3232496aa7',
    completed: true,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095564788e0',
    completed: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
];

// 1. анонимная функция, предотвращает доступ к коду извне
(function(arrOfTasks) {
  // 2. превращаем массив задач в объект объектов для легкого доступа к задаче по её ID
  const objOfTasks = arrOfTasks.reduce((acc, task) => {
    acc[task._id] = task;
    return acc;
  }, {});

  /** (Elements UI) */
  // 9 находим элемент относительно родителя, куда добавим фрагмент
  const listContainer = document.querySelector(
    ".tasks-list-section .list-group",
  );

  // 11 теперь добавление таска через интерфейс - ищем форму по её id или имени
  // форма не ищется по классу!!!
  const form = document.forms['addTask'];
  // 12 через эту форму находим отдельные input внутри формы
  // у форм есть метод element, который находит нужный input по id или имени
  const inputTitle = form.elements['title'];
  // 13 также находим второй input 
  const inputBody = form.elements['body'];


  /** вызовы (Events) */
  // 8 вызываем функцию из шага 3
  renderAllTasks(objOfTasks);
  // 16 вешаем на форму событие
  form.addEventListener("submit", onFormSubmitHandler);
  // 28 Через делегирование вещаем событие на родителя - контейнер из п 9
  // и при клике проверяем есть ли внутри контейнера такой класс запускаем функцию
  // в нашем случае - удаления такси
  listContainer.addEventListener('click', onDeleteHandler);



  /** функции (Functions)*/
  // 3. создадим функцию, которая будет вызывать наш лист задач и вызывать её ранее  для удобства
  function renderAllTasks(tasksList) {
    // т.к. модификация DOM объемная задача и чтобы не генерировать каждый элемент отдельно, соберем фрагмент, который затем и добавим на страницу
    // 4. проверяем, передали ли лист задач
    if (!tasksList) {
      console.error("передайте список задач")
      return;
    }

    // 5. создадим фрагмент
    const fragment = document.createDocumentFragment();
    // 6. перебираем лист задач при помощи Object.values
    Object.values(tasksList).forEach(task => {
      // 7. создаем DOM объект, который добавим в фрагмент
      // 7.1 чтобы не загромождать forEach выведем создание в отдельную функцию
      const li = listItemTemplate(task);
      fragment.appendChild(li);
    });
    // 10 передаем фрагмент в контейнер из шага 9
    listContainer.appendChild(fragment);
  }

  // 7.2 функция создания отдельного DOM объекта из task
  // классы и верстку можно взять из index.html
  function listItemTemplate({_id, title, body}) {
    // 7.3 создаем элементы и наполняем их
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "align-items-center",
      "flex-wrap",
      "mt-2"
    );

    const span = document.createElement("span");
    span.textContent = title;
    span.style.fontWeight = "bold";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add(
      "btn",
      "btn-danger",
      "ml-auto",
      "delete-btn"
    );

    const article = document.createElement("p");
    article.textContent = body;
    article.classList.add("mt-2","w-100");

    // 7.4 добавляем элементы в li
    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(article);
    
    return li;
  }

  // 14 создадим функция обработчик события клика по кнопке submit в форме
  function onFormSubmitHandler(e) {
    // 15 для прекращения стандартного действия
    e.preventDefault();
    // 17 вытаскиваем значения, которые были в input, title, body
    // 17.1 для это создаем переменные, обращаемся к свойству value этих элементов
    const titleValue = inputTitle.value;
    const bodyValue = inputBody.value;

    // 18 проверка на пустые значения
    if (!titleValue || !bodyValue) {
      alert("Please, write title and body");
      return;
    }

    // 19 создание задачи.
    // 19.1 Первое правило - необходимо разделять логику работы с DOM и
    // логику работы с данными на разные функции.
    // т.е. п.14 - функция для работы с DOM, а п.20 функция для работы с данными

    // 21 вызываем новую функцию из п.20 из обработчика
    const task = createNewTask(titleValue, bodyValue);
    // 25 создаем из новой задачи DOM-объект одного элемента списка и добавить его в контейнер
    // просто передаем наш объект в функцию-шаблон и она сгенерирует нам одну li
    const listItem = listItemTemplate(task);
    // 26 добавляем новую задачу в DOM
    listContainer.insertAdjacentElement("afterbegin", listItem);
    // 27 очищаем форму после ввода
    form.reset();
  }

  // 20 создаем функцию, которая создает новый таск
  // она будет создавать новый объект задачи и добавлять его в наш список тасков
  function createNewTask(title, body) {
    // 22 на основе переданных значений функция создаст новую задачу
    const newTask = {
      title,
      body,
      completed: false,
      _id: `task-${Math.random()}`,
    };

    // 23 добавляем новые объект в список задач
    objOfTasks[newTask._id] = newTask;

    // 24 для будущих задач возвращаем задачу или её копию
    // через неглубокое копирование
    return { ...newTask };
  }

  function onDeleteHandler(e) {
    console.log(e.target);
  }

})(tasks);
