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

// 2
const ulLinksArr = Array.from(ul.getElementsByTagName('a'));
console.log(ulLinksArr);

ulLinksArr.forEach( el => {
  const strong = document.createElement('strong');
  el.appendChild(strong);
})

// 3
const img = document.createElement('img');
img.setAttribute('src', './scr/maxresdefault.jpg');
img.setAttribute('alt', 'Jaheira');
img.setAttribute('width', '500');
console.log(img);

const body = document.body;
body.insertAdjacentElement("afterbegin", img);

// 4
const mark = document.querySelector('mark');
mark.insertAdjacentText('beforeend',' green');
mark.classList.add('green');

// 5
const ulChildren = Array.from(document.querySelector('ul').children); 
const listItems = ulChildren.reverse();
ul.innerHTML = '';
listItems.forEach((item) => ul.appendChild(item));