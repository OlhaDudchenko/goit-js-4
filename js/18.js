const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];
 console.table(products);

function getProductPrice(productName) {
  // Пиши код ниже этой строки
 
  for (const product of products) {
    // console.log(product.price);
    //  console. log(products.hasOwnProperty(productName));
    
     if (product.name ===productName) {
    //    console.log(product.price);
        return product.price;
      
      }
      
  }
  return null;
   
  // Пиши код выше этой строки
}

  console.log(getProductPrice('Радар'));
  console.log(getProductPrice('Захват'));
 console.log(getProductPrice('Сканер'));
 console.log(getProductPrice('Дроид'));
  console.log(getProductPrice('Двигатель'));