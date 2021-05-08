const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

function composeMessage(position) {
  // console.log(position);
    console.log(`Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`);
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
}
const messages = [];
for (let i = 0; i < orders.length; i += 1) {
  // console.log(orders[i]);
  messages.push(composeMessage.call(orders[i],i+1));
  };


console.log(messages);

// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];
// // Пиши код ниже этой строки
// function composeMessage(position) {
  
// 	return `Готовим ${this.dish} для ${this.email}.Ваш заказ ${++position}-й в очереди.`;
  
// }
// const messages = [];
// for(let g = 0; g < Object.keys(orders).length; g++){
  
//   messages.push(composeMessage.call(orders[g], g));
  
//   }
// console.log(messages);
