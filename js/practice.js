'use strict';


const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
   
  },
  
  removePotion(potionName) {
   
    for (let i = 0; i < this.potions.length; i += 1){
            // console.log(this.potions[i]);
          if (potionName === this.potions[i].name ) {
              // console.log(potionName);
               this.potions.splice(i, 1);
          }
        }
        return `Зелья ${potionName} нет в инвентаре!`;


      // const potionIndex = this.potions.indexOf(potionName);
      // console.log(potionIndex);

      // if (potionIndex === -1) {
      //   return `Зелья ${potionName} нет в инвентаре!`;
      // }

      // this.potions.splice(potionIndex, 1);
    
  },

   updatePotionName(oldName, newName) {
     
 for (let i = 0; i < this.potions.length; i += 1){
             console.log(this.potions[i].name);
            if (oldName === this.potions[i].name) {
               console.log(this.potions[i].name);
   
              this.potions.splice(i, 1, {name: newName, price: this.potions[i].price});
             
   };
   
     };
return `Зелья ${oldName} нет в инвентаре!`;


  },
};

//  console.log(atTheOldToad.removePotion('Дыхание дракона'));
//   console.log(atTheOldToad.getPotions());
   
//   atTheOldToad.removePotion('Зелье скорости');
//  console.log(atTheOldToad.getPotions());
     
//  console.log(atTheOldToad.removePotion('Удача утопленника'));
//      console.log(atTheOldToad.getPotions());

  // atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф');
  // console.log(atTheOldToad.getPotions());
 
  // atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости');
  //  console.log(atTheOldToad.getPotions());


  const stones = [
  { name: "Изумруд", price: 1300, quantity: 4 },
  { name: "Бриллиант", price: 2700, quantity: 3 },
  { name: "Сапфир", price: 400, quantity: 7 },
  { name: "Щебень", price: 200, quantity: 2 }
];
function calcTotalPrice(stones, stoneName) {
  for (const stone of stones) {
    if (stone['name'] === stoneName) {
      return stone['price' * stone['quantity']];
    }
  }
};
// console.log(calcTotalPrice(stones,'Щебень'));

const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
};

const { name = 'hotel', stars = 3, status = 'empty' } = hotel;

// console.log(name, stars, status); // "Resort Hotel", 5, "empty"

// 

// const printMessage = function (message) {
//   // console.log(message);
// };

// const higherOrderFunction = function (callback) {
//   const string = 'HOCs are awesome';
//   callback(string);
// };

//  higherOrderFunction(printMessage);


for (let i = 0; i < 10; i += 1) {
  // console.log(i);
}

const repeatLog = function (n) {
  for (let i = 0; i < n; i += 1) {
    console.log(i);
  }
};

// repeatLog(5);

// const printValue = function (value) {
//   // console.log(value);
// };

// const prettyPrint = function (value) {
//   // console.log('Logging value: ', value);
// };

// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// // Передаем printValue как callback-функцию
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаем prettyPrint как callback-функцию
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2

// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// const labels = [];

// repeat(5, value => {
//   labels.push(`Label ${value + 1}`);
// });

// console.log(labels); // ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"]
// ***********************************************************************
const makeShef = function (name) {
  /*
   * Параметр name это локальная переменная для функции makeShef.
   * Это значит что она будет доступна функции makeDish через замыкание.
   */
  return function makeDish(dish) {
    console.log(`${name} is cooking ${dish}`);
  };
};

const mango = makeShef('Mango');
mango('apple pie'); // Mango is cooking apple pie
mango('beef stew'); // Mango is cooking beef stew

const poly = makeShef('Poly');
poly('pancakes'); // Poly is cooking pancakes
poly('eggs and bacon'); // Poly is cooking eggs and bacon
console.dir(mango);




