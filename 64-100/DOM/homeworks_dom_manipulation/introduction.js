//1
// console.log(document.head);
// console.log(document.body);
// console.log(document.body.children);
// console.log(document.body.firstElementChild);
// console.log(document.body.firstElementChild.children);
// const div = document.body.firstElementChild;
// const filteredArticles = [...div.children].filter(p => p !== div.firstElementChild && p !== div.lastElementChild);
// console.log(filteredArticles);

const getHead = document.head;
const getBody = document.body;
const getBodyChildren = document.body.children;
const getFirstDiv = document.querySelector('div');
const getFirstDivChildren = getFirstDiv.children;
const firstDivChildArr = Array.from(getFirstDivChildren);
const getFirstDivChildren12 = firstDivChildArr.slice(1,3);
console.log(getHead);
console.log(getBody);
console.log(getBodyChildren);
console.log(getFirstDiv, getFirstDivChildren, getFirstDivChildren12);
console.log('=============');

//2 
// check child of parent

// function isParent(parent, child) {
//   if (!(parent instanceof HTMLElement) || !(child instanceof HTMLElement)) return;

//   let isParent = false;
//   let currentParent = child.parentElement;
  
//   while(currentParent) {
//     isParent = currentParent === parent
//     if (isParent) {
//       break;
//     }

//     currentParent = currentParent.parentElement;
//   }

//   return isParent;
// }

// isParent(document.body.children[0], document.querySelector('mark'));

function isParent(parent, child) {
  return parent.contains(child);
}

console.log(isParent(document.body.children[1], document.querySelector('mark'))); //true
console.log(isParent(document.querySelector('ul'), document.querySelector('mark'))); //false
console.log('=============');

// 3
const getLinks = document.links;
const getParent = document.querySelector('ul');

function notContainedInUl(links, parent) {
  const linkArr = Array.from(links);
  for(const link of linkArr) {
    if (!parent.contains(link)) {
      console.log(link);
    }
  }
}

notContainedInUl(getLinks, getParent);

// const filteredLinks = [...document.links].filter(a => !a.closest('ul'));
// console.log(filteredLinks);

console.log('=============');

//4
const elementBeforeUl = getParent.previousElementSibling;
const elementAfterUl = getParent.nextElementSibling;
console.log(elementBeforeUl);
console.log(elementAfterUl)