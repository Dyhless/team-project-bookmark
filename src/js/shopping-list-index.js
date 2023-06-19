// Перевіряємо наявність даних у localStorage при завантаженні сторінки
document.addEventListener('DOMContentLoaded', function () {
  renderShoppingList();
});

// Функція для відображення списку книг з localStorage
function renderShoppingList() {
  const shoppingListContainer = document.querySelector(
    '.js-container-list-shop'
  );
  const screenSaver = document.querySelector('.js-screen-saver');

  // Отримуємо збережені книги з localStorage
  const books = getStoredBooks();

  if (books.length === 0) {
    // Якщо немає збережених книг, показуємо повідомлення "This page is empty....."
    screenSaver.classList.add('active');
  } else {
    // Якщо є збережені книги, відмальовуємо їх на сторінці
    shoppingListContainer.innerHTML = '';
    screenSaver.classList.remove('active');

    books.forEach(function (book) {
      const bookCard = createBookCard(book);
      shoppingListContainer.appendChild(bookCard);
    });
  }
}

// Функція для отримання збережених книг з localStorage
function getStoredBooks() {
  const storedBooks = localStorage.getItem('shoppingList');

  if (storedBooks) {
    return JSON.parse(storedBooks);
  } else {
    return [];
  }
}

// Функція для додавання книги до shopping list у localStorage
function addToShoppingList(book) {
  const storedBooks = getStoredBooks();
  storedBooks.push(book);
  localStorage.setItem('shoppingList', JSON.stringify(storedBooks));
}

// Отримання кнопки "Add to shopping list" з модального вікна
const addToShoppingListBtn = document.querySelector('.js-add-to-list');

// Додавання обробника події до кнопки "Add to shopping list"
addToShoppingListBtn.addEventListener('click', function () {
  addToShoppingList(currentBook);

  // Оновлюємо відображення кнопок "Add to shopping list" та "Remove from the shopping list" у модальному вікні
  addToShoppingListBtn.classList.add('is-hidden');
  const removeFromShoppingListBtn = document.querySelector(
    '.js-remove-from-list'
  );
  removeFromShoppingListBtn.classList.remove('is-hidden');
});

// Функція для видалення книги з shopping list у localStorage
function removeFromShoppingList(bookId) {
  const storedBooks = getStoredBooks();
  const updatedBooks = storedBooks.filter(function (book) {
    return book.id !== bookId;
  });
  localStorage.setItem('shoppingList', JSON.stringify(updatedBooks));
}

// Функція для створення шаблону карточки книги
function createBookCard(book) {
  const cardTemplate = `
    <li class="item">
      <button type="button" class="button close js-btn-addlist" data-book-id="${book.id}">
        <img class="img" src="https://github.com/Dyhless/team-project-bookmark/tree/main/src/images/shops/trash.png?raw=true" alt="${book.title}">
      </button>
      <div class="book-cover shop-list">
        <img src="${book.book_image}" alt="${book.title}" class="img">
      </div>
      <div class="book-describe">
        <h2 class="subject">${book.title}</h2>
        <span class="category">${book.list_name}</span>
        <p class="describe">${book.description}</p>
        <div>
          <span class="author">${book.author}</span>
          <ul class="list">
            <li class="book-link">
              <a href="${book.buy_links[0].url}" class="link" target="_blank">
                <img src="https://github.com/Dyhless/team-project-bookmark/tree/main/src/images/shops/amazon.png?raw=true" alt="amazon shop" class="img">
              </a>
            </li>
            <li class="book-link">
              <a href="${book.buy_links[1].url}" class="link" target="_blank">
                <img src="https://github.com/Dyhless/team-project-bookmark/tree/main/src/images/shops/appel-books.png?raw=true" alt="apple-books shop" class="img">
              </a>
            </li>
            <li class="book-link">
              <a href="${book.buy_links[2].url}" class="link" target="_blank">
                <img src="https://github.com/Dyhless/team-project-bookmark/tree/main/src/images/shops/google-play.png?raw=true" alt="google-play shop" class="img">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  `;

  const cardWrapper = document.createElement('div');
  cardWrapper.innerHTML = cardTemplate.trim();

  // Отримання кнопки "Add to shopping list"
  const addButton = cardWrapper.querySelector('.js-btn-addlist');

  // Отримати кнопку "Remove from the shopping list"
  const removeButton = cardWrapper.querySelector('.js-remove-from-list');

  // Перевірка, чи книга вже є у списку покупок
  if (isBookInShoppingList(book.id)) {
    addButton.style.display = 'none'; // Приховуємо кнопку "Add to shopping list"
    removeButton.style.display = 'inline-block'; // Показуємо кнопку "Remove from the shopping list"
  } else {
    addButton.style.display = 'inline-block'; // Показуємо кнопку "Add to shopping list"
    removeButton.style.display = 'none'; // Приховуємо кнопку "Remove from the shopping list"
  }

  // Додадаємо обробник події для кнопки "Add to shopping list"
  addButton.addEventListener('click', function () {
    // Додадаємо книгу до shopping list у localStorage
    addToShoppingList(book);

    // Оновлюємо відображення списку книг на сторінці
    renderShoppingList();
  });

  // Додадаємо обробник події для кнопки "Remove from the shopping list"
  removeButton.addEventListener('click', function () {
    // Видаляємо книгу з shopping list у localStorage
    removeFromShoppingList(book.id);

    // Оновлюємо відображення списку книг на сторінці
    renderShoppingList();
  });

  return cardWrapper.firstChild;
}

// Функція для перевірки, чи книга вже є у списку покупок
function isBookInShoppingList(bookId) {
  const storedBooks = getStoredBooks();
  return storedBooks.some(function (book) {
    return book.id === bookId;
  });
}
