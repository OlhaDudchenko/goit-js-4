const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
  let totalPrice = 0;
  for (const product of products) {
    // console.log(product.name);
  if (product.name===productName) {
    totalPrice = product.price * product.quantity;
  }
  
}
  return totalPrice;

  // Пиши код выше этой строки
}


// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];
// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
  
//   for(const product of products){
    
//     if(product.name === productName){
           
//          const total = product.price * product.quantity;
          
//     	return total
//     	} 
//     } return 0
  
// // Пиши код выше этой строки
// }
console.log(calculateTotalPrice('Бластер'));
console.log(calculateTotalPrice('Радар'));
console.log(calculateTotalPrice('Дроид'));
console.log(calculateTotalPrice('Захват'));
console.log(calculateTotalPrice('Сканер'));