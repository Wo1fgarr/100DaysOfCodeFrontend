// //reverse string
// const encrypt = (text) => {
//     let results = '';
//     for (let i = 0; i < text.length; i++) {
//     //   console.log(text.slice(i, i+2).split("").reverse().join(""));
//       results += text.slice(i, i+2).split("").reverse().join("");
//       i += 1;
//     }
//     return results;
// }
  
  
  
//   console.log(encrypt('move')); // 'omev'
//   console.log(encrypt('attack')); // 'taatkc'

const searchSign = (inputString) => {
    let result = inputString.match(/[\+\-\*\/]/g);

    console.log(result.length);
    console.log(result);
}

searchSign('2+2+3-4*3/3');