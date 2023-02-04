//1
const para = document.querySelector('p').textContent;
console.log(para);

// const par = document.querySelector('p');
// console.log(par.childNodes.length);

//2
function getNodeInfo(node) {
  const info = {
    elemType: node.nodeType,
    elemName: node.nodeName,
    elemChildrenCount: node.childNodes.length,
  }
  
  return info;
}

console.log(getNodeInfo(document.querySelector('p')));
console.log(getNodeInfo(document.querySelector('title')));

//3
function getTextFromUi() {
  // if (!(ul instanceof HTMLElement)) return;
  //     const [...links] = ul.querySelectorAll('a') || [];
  //     return links.map(a => a.textContent);
  const ulChild = Array.from(document.querySelector('ul').children);
  return ulChild.map( el => el.textContent);
}

console.log(getTextFromUi());

// 4
// const [...pChildNodes] = document.querySelector('p').childNodes;
//     pChildNodes.forEach(child => {
//       if (child.nodeType === 3) {
//         child.textContent = '-text-'
//       }
//     });
function changeTextNodes(allNodes) {
  allNodes.forEach(el => {
    if (el.nodeType === 3) {
      el.textContent = "-text-";
    }
  })
}

changeTextNodes(document.querySelector('p').childNodes);
console.dir(document.querySelector('p').childNodes);