'use script';

// Восстановить порядок книг.
const books = document.querySelectorAll('.book');
books[1].after(books[0]);
books[3].after(books[2]);
books[4].after(books[2]);
books[4].after(books[3]);
books[5].after(books[2]);

// Заменить картинку заднего фона на другую из папки image
document.body.style.backgroundImage = 'image/adv.jpg';

// Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
// Удалить рекламу со страницы
// Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
// в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место