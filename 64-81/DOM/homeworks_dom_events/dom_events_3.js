const box = document.querySelector('.container');

colors = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];

function getRand() {
  let result = Math.round((Math.random() * 10));
  if (result === 10) return result - 1;
  return result;
}

function changeBackgroundColor(e) {
  let timerId;
  let rand = getRand();
  let el = e.target.children[0];
  console.log(el);
  if (el) {
    clearTimeout(timerId);
  }
  setTimeout(() => (el.style.background = `${colors[rand]}`), 200);
}

function removeBackgroundColor(e) {
  let el = e.target.children[0];
  return el.style.background = 'none';
}

box.addEventListener('mouseover', changeBackgroundColor);
box.addEventListener('mouseout', removeBackgroundColor);

// function setRandomColor(el) {
//   const colors = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];
//   // Выбираем произвольный цвет из массива
//   const randomColor = colors[Math.floor(Math.random() * colors.length)];
//   el.style.background = randomColor;
// }

// function resetColor(el) {
//   el.style.background = '';
// }

// function onBoxHover(e) {
//   // Создаем массив элементов которые будут менять фон.
//   let elements = [e.currentTarget];
//   let currentEl = e.currentTarget;
//   // Проходимся циклом по всем дочерним элементам до самого последнего
//   while (currentEl) {
//     elements = [...elements, ...currentEl.children];
//     currentEl = currentEl.children[currentEl.children.length - 1];
//   }
//   // Перебираем сформированный массив и устанавливаем на каждый элемент цвет в таймауте
//   elements.forEach((el, index) => setTimeout(setRandomColor, 200 * (index + 1), el));
// }

// function onMouseLeave(e) {
//   resetColor(e.currentTarget);
// }

// document.querySelectorAll('.box').forEach(box => box.addEventListener('mouseenter', onBoxHover));
// document.querySelectorAll('.box').forEach(box => box.addEventListener('mouseleave', onMouseLeave));