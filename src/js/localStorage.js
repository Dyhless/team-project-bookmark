// Локальне сховище даних

// Оголошуємо константу для ключа локального сховища
const KEY_ADD_BOOKS = 'shoplist';

// Додаємо обробник події на кнопку refs.btnAddShopList
refs.btnAddShopList.addEventListener('click', makeLocalData);

// Функція, яка додає або видаляє книгу зі списку покупок
function makeLocalData(event) {
  let booksAddShopList = []; // Тимчасовий масив для книг, які додаються до списку покупок
  let bookArray = booksArrayTop; // Масив книг, з якого відбувається вибір книги для додавання

  refs.btnAddShopList.textContent = 'remove from the shopping list'; // Зміна тексту кнопки

  for (const book of bookArray) {
    // Перевірка, чи поточна книга відповідає обраній книзі
    if (book._id === id) {
      // Перевірка, чи вже є дані у локальному сховищі
      if (getLocalData(KEY_ADD_BOOKS) !== null) {
        const parsedBooks = getLocalData(KEY_ADD_BOOKS);
        // Перевірка, чи кнопка не має атрибуту 'data-buy'
        if (refs.btnAddShopList.hasAttribute('data-buy') === false) {
          parsedBooks.push(book); // Додавання книги до списку покупок
          setLocalData(KEY_ADD_BOOKS, parsedBooks); // Збереження оновленого списку покупок у локальному сховищі
          return refs.btnAddShopList.setAttribute('data-buy', 'addlist'); // Зміна атрибуту кнопки
        }
        // Перевірка, чи кнопка має атрибут 'data-buy'
        if (refs.btnAddShopList.hasAttribute('data-buy') === true) {
          // Видалення книги зі списку покупок
          const newParsedBooks = parsedBooks.filter(
            element => element._id !== id
          );
          setLocalData(KEY_ADD_BOOKS, newParsedBooks); // Збереження оновленого списку покупок у локальному сховищі
          refs.btnAddShopList.removeAttribute('data-buy'); // Видалення атрибуту з кнопки
          refs.btnAddShopList.textContent = 'add to shopping list'; // Зміна тексту кнопки
        }
      } else {
        booksAddShopList.push(book); // Додавання книги до тимчасового масиву
        setLocalData(KEY_ADD_BOOKS, booksAddShopList); // Збереження списку покупок у локальному сховищі
      }
    }
  }
}

// Функція для збереження даних у локальному сховищі
function setLocalData(key, book) {
  try {
    const bookJSON = JSON.stringify(book); // Перетворення об'єкту з книгами в рядок JSON
    return localStorage.setItem(key, bookJSON); // Збереження рядка JSON у локальному сховищі
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

// Функція для отримання даних з локального сховища
function getLocalData(list) {
  try {
    const savedBooks = localStorage.getItem(list); // Отримання рядка JSON з локального сховища
    const parsedBooks = JSON.parse(savedBooks); // Парсинг рядка JSON у відповідний об'єкт
    return parsedBooks; // Повернення об'єкту з даними
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}
export { setLocalData, getLocalData }; // Експорт функцій для використання у schopping-list
