const box = document.querySelector('.box');
console.log(box.children);

colors = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];

let rand = Math.round(Math.random() * 10);
console.log(rand);
let randomColor = colors[rand];



box.addEventListener('mouseover', e => {
  let item = e.target.children;
  console.log(item);
  console.log( randomColor );
  item.style.background = `"${colors[rand]}"`;
})