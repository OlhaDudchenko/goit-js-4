function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Пиши код ниже этой строки
  const values = Object.values(salaries);
  // console.log(values);
  for (const value of values) {
    totalSalary += value;
  }
  // Пиши код выше этой строки
  return totalSalary;
}

console.log(countTotalSalary({}));
console.log( countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// salaries = {
//   mango: 100,
//   poly: 150,
//   alfred: 80
  
// }