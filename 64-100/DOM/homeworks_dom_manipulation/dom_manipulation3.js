// 1
const ul = document.querySelector('ul');

function createFragment( count, parentLength ) {
  const fragment = document.createDocumentFragment();
  const newTextContents = [];
  for ( let j = 1; j <= count; j++) {
    newTextContents.push(`item ${parentLength + j}`);
  }

  newTextContents.forEach((newTextContent) => {
    const item = document.createElement('li');
    item.classList.add('new-item');
    item.textContent = newTextContent;
    fragment.appendChild(item);
  })

  return fragment;
}

let fragment = createFragment(4, ul.childElementCount);
ul.appendChild(fragment);