// Пиши код ниже этой строки
function add(...args) {
  console.log(args);
  let total = 0;
  for (const arg of args) {
    
    total += arg;
  }
  return total;
  

  // let result=0;
  // for (let i = 0; i < args.length; i+=1){
  //   // console.log(args[i]);
  //   result += args[i];
  // }
  //  return result;
  

}

console.log(add(15, 27));
console.log(add(12, 4, 11, 48));
console.log(add(32, 6, 13, 19, 8));
console.log(add(74, 11, 62, 46, 12, 36));

// const add = function (...args) {
//   console.log(args); // массив всех аргументов
// };

// add(1, 2, 3);
// add(1, 2, 3, 4, 5);
