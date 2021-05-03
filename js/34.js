const bookShelf = {
  // Пиши код ниже этой строки
  books: ['Последнее королевство', 'Страж снов'],
  getBooks() {
    return 'Возвращаем все книги';
  },
  addBook(bookName) {
    return `Добавляем книгу ${bookName}`;
    },
    removeBook(bookName) { return `Удаляем книгу ${bookName}`; },
    updateBook(oldName, newName) { return `Обновляем книгу ${oldName} на ${newName}`;},
  // Пиши код выше этой строки
};
console.log( bookShelf.getBooks());
console.log(bookShelf.addBook('Мгла'));
console.log(bookShelf.removeBook('Красный закат'));
console.log(bookShelf.updateBook('Пески Дюны', 'Дюна'));