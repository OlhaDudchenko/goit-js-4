
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки

const { yesterday,today,tomorrow } = highTemperatures;

// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;

console.log(highTemperatures.yesterday);
console.log(highTemperatures.today);
console.log(highTemperatures.tomorrow);
console.log(meanTemperature);



























// function findLongestWord(string) {
//         const massFromString = string.split(' ');
//     // console.log(massFromString);
//         let longestWord = '';

//         for ( const element of massFromString) {
//             // console.log(element);

//             if (element.length > longestWord.length) {
//                 longestWord = element;
//             }
//         }

//        return longestWord;


// }


// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));
// console.log(findLongestWord('Find a cat'));



//  ******************************************


// const wordsMasiv = string.split(' ');
    // let max = wordsMasiv[0];

    // for (let i = 0; i < wordsMasiv.length; i += 1){

    //     if (wordsMasiv[i].length > max.length) {
    //         max = wordsMasiv[i];

    //     }
    // }

    // return max;