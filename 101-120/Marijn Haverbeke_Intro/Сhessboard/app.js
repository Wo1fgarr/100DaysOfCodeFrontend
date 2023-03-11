const sharp = '# ';
const space = ' #';
const size = 8;
let result = '';

for (let j = 0; j < size; j++) {
  if (j % 2 !== 0) {
    for (let i = 0; i < size; i++) {
      result += space;
      if (result.length >= size) break;
    }
  } else {
    for (let i = 0; i < size; i++) {
      result += sharp;
      if (result.length >= size) break;
    }
  }
  
  console.log(result);
  result = '';
}
