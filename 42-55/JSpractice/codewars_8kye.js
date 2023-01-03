// Vowel remover 
function shortcut (string) {
    return string.replace(/[aeiou]/gm, '');
}


// use endsWith
function solution(str, ending){
    return str.endsWith(ending);
}

console.log(solution('abcde', 'cde'))
console.log(solution('abcde', 'abc'));


// Get Collatz conjecture count
var hotpo = function(n){
    if(n == 0) return 0; //Optional Handler to n = 0
    
    let k = n;
    let count = 0;
    while (k !== 1) {
      if ( k % 2 === 0) {
        k = k / 2;
      }
      else {
        k = 3 * k + 1;
      }
      count += 1;
    }

    return count;
}

console.log(hotpo(1));
console.log(hotpo(5));
console.log(hotpo(6));
console.log(hotpo(23));


// get multi of arrays elements
function grow(x){
    return x.reduce((multi, el) => multi * el)
}


// string reverse
function solution(str){
    const convertedString = String(str);
    return convertedString.split('').reverse().join('');
}

// get array from string
function stringToArray(string){
	return string.split(' ');
}


// get centroid
function barTriang(p1, p2, p3){
  let args = arguments;
    let x = 0;
    let y = 0; 

    for (key in args) {
        for ( let j = 0; j < args[key].length; j++ ){
            if ( j === 0 ) x += args[key][j];
            else if ( j === 1 ) y += args[key][j];
        }
    }

    let x0 = parseFloat((x / 3).toFixed(4));
    let y0 = parseFloat((y / 3).toFixed(4));

    let result = [x0, y0];
    return result;
}


// get humanYearsCatYearsDogYears
var humanYearsCatYearsDogYears = function(humanYears) {
  catYears = 0;
  dogYears = 0;
    
  for ( let j = 0; j <= humanYears; j++) {
    if (j === 1) {
      catYears = 15;
      dogYears = 15;
    }
    else if (j === 2) {
      catYears += 9;
      dogYears += 9;
    }
    else if (j > 2) {
      catYears += 4;
      dogYears += 5;
    }
  }
  
  return [humanYears, catYears, dogYears];
}

console.log(humanYearsCatYearsDogYears(1)); //[1,15,15]


// get quarter Of month
const quarterOf = (month) => {
  const quarters = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]];
  
  for ( let j = 0; j < quarters.length; j++) {
    // console.log(quarters[j]);
    // console.log(quarters[j].includes(month));

    let isInclude = quarters[j].includes(month);

    if ( isInclude ) {
      // return `This month: ${month} contain in ${j + 1} quarters`;
      return j + 1;
    }
  }
}

console.log(quarterOf(3));
console.log(quarterOf(8));
console.log(quarterOf(11));