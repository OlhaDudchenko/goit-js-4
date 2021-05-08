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
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
    }

    this.potions.push(potionName);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      // console.log(this.potions[i]);
      if (potionName === this.potions[i].name) {
        console.log(potionName)
        // console.log(potionName);
        this.potions.splice(i, 1);
      }
    }

    //    for (const potion of this.potions) {
    //   //  console.log(potion.name);
    //    if (potion.name === potionName) {
    //       // potion.name = newName;
    //      this.potions.splice(potion, 1);
    //      }
     
    // }
    return `Зелья ${potionName} нет в инвентаре!`;
      


    
  },
  updatePotionName(oldName, newName) {
    //  for (let i = 0; i < this.potions.length; i += 1){
    //            console.log(this.potions[i].name);
    //           if (oldName === this.potions[i].name) {
    //              console.log(this.potions[i].name);
   
    //             this.potions.splice(i, 1, {name: newName, price: this.potions[i].price});
             
    //  };
   
    //    };
    //   return `Зелья ${oldName} нет в инвентаре!`;
    
    
  //   for (const potion of this.potions) {
  //     console.log(potion.name);
  //     if (potion.name === oldName) {
  //       potion.name = newName;
  //      }
     
  //  }
    
  }


  
    
};
// console.log(atTheOldToad);
//  atTheOldToad.getPotions();
//   console.log(atTheOldToad.getPotions());

//   atTheOldToad.addPotion({ name: 'Невидимка', price: 620 });
//   console.log(atTheOldToad.getPotions());

//   atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 });
//   console.log(atTheOldToad.getPotions());

 atTheOldToad.removePotion('Дыхание дракона');
 console.log(atTheOldToad.getPotions());
   
atTheOldToad.removePotion('Зелье скорости');
    console.log(atTheOldToad.getPotions());

// console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));
// console.log(atTheOldToad.getPotions());
 
// console.log(atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'));
// console.log(atTheOldToad.getPotions());
