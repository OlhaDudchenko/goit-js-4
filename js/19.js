const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  
  let props = [];
  for (const product of products) {
    //  console.log(product);
    const keys = Object.keys(product);
    //  console.log(keys);
    for (const key of keys) {
      // console.log(product[key]);
      if (key === propName) {
        props.push(product[key]);
     
     
      }
    }
    }
  return props;
}

console.log(getAllPropValues('name'));
   console.log(getAllPropValues('quantity'));
   console.log(getAllPropValues('price'));
  console.log(getAllPropValues('category'));