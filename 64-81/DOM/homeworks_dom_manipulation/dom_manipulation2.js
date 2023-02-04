// 1
let ulList = document.querySelector('ul');
ulList.classList.toggle('list');

// 2
// 2.1
// const link = document.querySelector('ul ~ a');
// link.id = 'link';
// console.log(link);


/**
 * 
 * @param {*} element - Any element for start
 * @param {*} elementName - nodeName of next sibling element
 * @param {*} attr - attribute 
 * @param {*} attrValue - attribute value. Default value: empty string
 */
function setNextElemAttr(element, elementName, attr, attrValue = '') {
  let nextSiblingsList = [];
  while(element.nextSibling) {
    nextSiblingsList.push(element = element.nextSibling);
  }

  nextSiblingsList.map( el => {
    if (el.nodeName === elementName) el.setAttribute(attr, attrValue);
  });
}

setNextElemAttr(document.querySelector('ul'), 'A', 'id', 'link');

// 3
// 3.1
// const [...liN2] = document.querySelectorAll('li:nth-child(odd)');
// liN2.forEach(li => li.classList.add('item'));
// 3.2
// const [...allLi] = document.querySelectorAll('li');
// allLi.forEach((li, index) => {
//    if (!(index % 2)) {
//      li.classList.add('item')
//    }
// });
function listClassName(element) {
  for (let j = 0; j < element.length; j++) {
    element[j].classList.add('item');
    j++;
  }
}

listClassName(document.querySelector('ul').children);

// 4
// const [...links] = document.links;
// links.forEach(link => link.classList.add('custom-link'));
function setLinkClass(links) {
  const linksArr = Array.from(links);
  return linksArr.map(el => el.classList.add('custom-link'));
}

setLinkClass(linksList = document.links);
