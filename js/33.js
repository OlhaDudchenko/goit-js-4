
function findMatches(numbers,...args) {
  const matches = []; // Не изменяй эту строку
for (const arg of args) {
     if (numbers.includes(arg)) {
         matches.push(arg);
        console.log(arg);
    }
    
}
  // Пиши код выше этой строки
  return matches;
}
//               2 ВАРИАНТ РЕШЕНИЯ 
// function findMatches(masiv,...value) {
//   const matches = []; // Не изменяй эту строку
  
//   let all = [...masiv, ...value];
//   // console.log(all.sort());
//   // console.log(all);
  
//   for (let i = 0; i < all.length; i++) {
//       console.log([i - 1]);
//      if (all[i] === all[i - 1]) {
      
//     matches.push(all[i]);
//     }
// }
//   // Пиши код выше этой строки
//   return matches;
// }
//   3 ВАРИАНТ РЕШЕНИЯ
// function findMatches(masiv, ...value) {
//   const matches = []; // Не изменяй эту строку
  
//   let all = [...masiv, ...value];
//   // console.log(all.sort());
//   //  console.log(all);
  
//   for (let i = 0; i < all.length; i+=1) {
//       // console.log(all[i]);
//     for (let j = i - 1; j >= 0; j -= 1) {
//       //  console.log(all[j]);
//       if (all[i] === all[j]) {
      
//         matches.push(all[i]);
//       }
      
//     }
//     // Пиши код выше этой строки
  
//   }
//     return matches;
// }
console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));