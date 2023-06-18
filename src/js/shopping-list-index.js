// Додавання книжок в Shopping-list

// Вибірка елементів з DOM
const btnDropDownRef = document.querySelector('.dropbtn');
const btnAddShopList = document.querySelector('.js-btn-addlist');
const pileBooksRef = document.querySelector('.js-screen-saver');

// Додавання обробника події на кнопку btnDropDownRef
btnDropDownRef.addEventListener('click', makeDropDown);

// Функція для відкриття/закриття списку
function makeDropDown() {
  document.getElementById('myDropdown').classList.toggle('show');
}

// Додавання обробника події на document для закриття списку при кліку в межах сторінки
document.addEventListener('click', makeDropClose);

function makeDropClose(event) {
  // Перевірка, чи клікнуто не на елементи, які відповідають кнопці відкриття списку
  if (
    !event.target.matches('.dropbtn') &&
    !event.target.matches('.dropbtn span') &&
    !event.target.matches('.dropbtn use') &&
    !event.target.matches('.dropbtn img') &&
    !event.target.matches('.dropbtn svg')
  ) {
    const dropdowns = document.getElementsByClassName('dropdown-content');

    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// Задаємо константу та робимо вибірка елементу списку покупок з DOM
const onShopListRef = document.querySelector('.js-container-list-shop');

// Імпорт функцій setLocalData та getLocalData з файлу 'localStorage.js'
import { setLocalData, getLocalData } from './localStorage';

const KEY_ADD_BOOKS = 'shoplist'; // Ключ для локального сховища списку покупок

// Функція для створення розмітки списку покупок
function markupShopList(parsedBooks) {
  let markup = '';
  if (parsedBooks === undefined) {
    return;
  }
  onShopListRef.innerHTML = '';
  markup = parsedBooks
    .map(
      book => `<li class="item ">
	<button type="button" class="button close js-btn-addlist" data-buy="delete-book">
	<img class="img" src="https://github.com/Dyhless/team-project-bookmark/tree/main/src/images/shops/books-card/trash.png?raw=true" alt="${book.title}">
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
				<a href="${book.buy_links[0].url}" class="link" target=”_blank”>
					<img src="https://github.com/Dyhless/team-project-bookmark/tree/main/src/images/shops/books-card/amazon.png?raw=true"
						alt="amazon shop" class="img">
				</a>
			</li>
			<li class="book-link">
				<a href="${book.buy_links[1].url}" class="link" target=”_blank”>
					<img
						src="https://github.com/Dyhless/team-project-bookmark/tree/main/src/images/shops/books-card/appel-books.png?raw=true"
						alt="apple-books shop" class="img">
				</a>
			</li>
			<li class="book-link">
				<a href="${book.buy_links[4].url}" class="link" target=”_blank”>
					<img src="https://github.com/Dyhless/team-project-bookmark/tree/main/src/images/shops/books-card/bookshop.png?raw=true"
						alt="bookshop" class="img">
				</a>
			</li>
		</ul>
		</div>
	</div>
</li>`
    )
    .join('');
  onShopListRef.innerHTML = markup;
  const btnDeleteRef = document.querySelectorAll('[data-buy="delete-book"]');
  btnDeleteRef.forEach(btn =>
    btn.addEventListener('click', deleteBookFromList)
  );
}

// Функція для видалення книги зі списку покупок
function deleteBookFromList(event) {
  const parsedBooks = getLocalData(KEY_ADD_BOOKS).filter(
    element => element.title !== event.target.alt
  );
  setLocalData(KEY_ADD_BOOKS, parsedBooks);
  getFirstPage();
  markupShopList();
}
