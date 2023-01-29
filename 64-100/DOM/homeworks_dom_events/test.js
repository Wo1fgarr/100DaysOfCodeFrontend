const div = document.querySelector('div');
const bg_color = div.classList.add('bg-color');
const setBgColorProperty = document.querySelector('.bg-color');
// setBgColorProperty.style.background = 'red';

colors = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];

// let rand = Math.round(Math.random() * 10);
// console.log(rand);
// let randomColor = colors[rand];


function firstfunc(arr, fn = 'noColor', someClass) {
  return someClass.style.background = `${fn(arr)}`;
}

// function firstfunc(arr, fn = 'noColor') {
//   return `New color: ${fn(arr)}`;
// }

function getRand() {
  let result = Math.round((Math.random() * 10));
  if (result === 10) return result - 1;
  return result;
}
function handler1(arr) {
  // let rand = Math.round(Math.random() * 10);
  let rand = getRand();
  // console.log(rand);
  // if ( rand === 10){
  //   return 'no Color';
  // }
  // return `${arr[rand]} index: ${rand}`;
  return arr[rand];
}

console.log(firstfunc(colors, handler1, setBgColorProperty));



