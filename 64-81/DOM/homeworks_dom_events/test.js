const div = document.querySelector('div');
const bg_color = div.classList.add('bg-color');
const setBgColorProperty = document.querySelector('.bg-color');

colors = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];

function firstfunc(arr, fn = 'noColor', someClass) {
  return someClass.style.background = `${fn(arr)}`;
}

function getRand() {
  let result = Math.round((Math.random() * 10));
  if (result === 10) return result - 1;
  return result;
}
function handler1(arr) {
  let rand = getRand();
  return arr[rand];
}

console.log(firstfunc(colors, handler1, setBgColorProperty));



