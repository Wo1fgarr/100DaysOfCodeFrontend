function century(year) {
  let dropTail = Number.parseInt(Math.trunc(year / 100));
  if (year < 100) return 1;
  else if (101 < year) {
    if ((dropTail % 100) === 0 ) {
      return dropTail;
    }
    // console.log((year / 100).toFixed());
   return dropTail + 1;
  }
}

console.log(century(202));  // 1, 
console.log(century(1705)); // 18,
console.log(century(1900)); // 19,
console.log(century(1601)); // 17,
console.log(century(2000)); // 20,
console.log(century(89));  // 1, 
console.log(century(475004));  // 1,
console.log(century(710054));  // 1,

console.log(2000 % 100)
console.log(7100 % 100)