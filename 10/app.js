'use strict';

// Восстановить порядок книг.
// Заменить картинку заднего фона на другую из папки image
// Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
// Удалить рекламу со страницы
// Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
// в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место

const book = document.querySelectorAll('.book');
const ad = document.querySelector('.adv');

book[5].after(book[2]);
book[1].after(book[0]);
book[0].after(book[4]);



document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

book[4].innerHTML = '<h2><a href="https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes" target="_blank">Книга 3. this и Прототипы Объектов</a></h2>';

ad.remove();