 const bookShelf = {
   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
     // Пиши код ниже этой строки
	
 	 const bookIndex = this.books.indexOf(oldName);
     this.books.splice(bookIndex,1,newName);
      return this.books;
	
     // Пиши код выше этой строки
     },
  
 };


bookShelf.updateBook('Мгла', 'Хроники подземелий');
// ['Последнее королевство', 'Хроники подземелий', 'Страж снов'].
console.log(bookShelf.books);

bookShelf.updateBook('Последнее королевство', 'Дюна');
//  ['Дюна', 'Мгла', 'Страж снов']
console.log(bookShelf.books);


// const bookShelf = {
//   books: ['Последнее королевство'],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // []
// bookShelf.addBook('Мгла');
// bookShelf.addBook('Страж снов');
// console.log(bookShelf.getBooks()); // ['Последнее королевство', 'Мгла', 'Страж снов']
// bookShelf.removeBook('Мгла');
// console.log(bookShelf.getBooks());