const atTheOldToad = {
  potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
    removePotion(potionName) {
      
      for (let i = 0; i < this.potions.length; i += 1){
        //   console.log(this.potions[i]);
          if (this.potions[i] === potionName) {
              console.log(potionName);
              this.potions.splice(i, 1);
          }
        
        }
  },
};

console.log(atTheOldToad.potions);
 console.log(atTheOldToad.removePotion('Дыхание дракона'));
console.log(atTheOldToad.removePotion('Зелье скорости'));
 console.log(atTheOldToad.potions);
