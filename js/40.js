const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  updatePotionName(oldName, newName) {
    // Пиши код ниже этой строки
    const potionsIndex = this.potions.indexOf(oldName);
    // console.log(this.potions.indexOf(oldName));
     this.potions.splice(potionsIndex,1,newName);
      return this.potions;
    // Пиши код выше этой строки
  },
};

console.log();
atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'), 
    console.log(atTheOldToad.potions);
// atTheOldToad.updatePotionName('Каменная кожа', 'Невидимка')
// console.log(atTheOldToad.potions);
