import Notiflix from 'notiflix';
import { BooksService } from './books-service';

const bookAPI = new BooksService();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    cardModal: document.querySelector('.card-modal'),
  };

  // refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', closeModal);

  let id = '';

  let amazon_link = '';
  let apple_link = '';
  let bookshop_link = '';

  refs.modal.addEventListener('click', logBackdropClick);
  window.addEventListener('click', cardForModal);

  function removeWindowEventListener() {
    window.removeEventListener('click', cardForModal);
  }

  //   (e)=>{console.log("e====",e.target);
  // console.log(e.target.getAttribute("data-id"));
  // return id=(e.target.getAttribute("data-id"));
  // }

  async function cardForModal(e) {
    // проверка если попал на картинку
    // e.preventDefault();

    id = e.target.getAttribute('data-id');
    if (id === null) {
      return;
    } else e.preventDefault(); // Prevent scrolling to the top
    openModal();
    // console.log('это айди', id);
    // обработка ошибки фетча?
    try {
      const book = await bookAPI.fetchBookById(id);

      // console.log('book', book);
      const { book_image, description, author, title, buy_links } = book;
      getLinkToShop(buy_links);
      // ========== Додавання до localStorage ==========

      const addBtn = document.querySelector('.js-add-to-list');
      const notify = document.querySelector('.notify');
      const removeBtn = document.querySelector('.js-remove-from-list');

      addBtn.addEventListener('click', addToShoppingList);
      removeBtn.addEventListener('click', removeFromShoppingList);

      const BOOKS_STORAGE = 'storage-of-books';
      let booksData = JSON.parse(localStorage.getItem(BOOKS_STORAGE)) || [];

      function updateAddButton() {
        if (isInShoppingList(id)) {
          addBtn.classList.add('is-hidden');
          removeBtn.classList.remove('is-hidden');
          notify.classList.remove('is-hidden');
        } else {
          addBtn.classList.remove('is-hidden');
          removeBtn.classList.add('is-hidden');
          notify.classList.add('is-hidden');
        }
      }

      function isInShoppingList(bookId) {
        return booksData.some(book => book._id === bookId);
      }

      function addToShoppingList() {
        if (isInShoppingList(id)) {
          console.log('The book is already in the shopping list.');
        } else {
          booksData.push(book);
          localStorage.setItem(BOOKS_STORAGE, JSON.stringify(booksData));
          updateAddButton();
        }
      }

      function removeFromShoppingList() {
        booksData = booksData.filter(book => book._id !== id);
        localStorage.setItem(BOOKS_STORAGE, JSON.stringify(booksData));
        updateAddButton();
      }

      //==================

      const markup = `<img src="${book_image}" alt="book" class="card-img-modal">
<div class="text-card-dt"> 
      <h5 class="title">${title}</h5>
<p class="author-card-modal">${author}</p>
<p class="text-card-modal">${description}</p>
<ul class="shops-modal">
<li class="li-modal">
<a href="${amazon_link}" target="_blank" rel="noopener noreferrer">
<img class="amazon" src="${new URL(
        '../images/shops/amazon_62x19.png',
        import.meta.url
      )}" alt="Amazon"</a>
</li>
<li class="li-modal">
  <a href="${apple_link}" target="_blank" rel="noopener noreferrer">
<img class="apple" src="${new URL(
        '../images/shops/apple-book_33x32.png',
        import.meta.url
      )}" alt="Apple-book"></a>
</li>
<li class="li-modal">
  <a href="${bookshop_link}" target="_blank" rel="noopener noreferrer">
<img class="book-shop" src="${new URL(
        '../images/shops/book-shop_38x36.png',
        import.meta.url
      )}" alt="Book-shop"></a>
</li>
</ul>
</div>
`;
      // console.log('markup', markup);

      renderMarkupModal(markup);
      updateAddButton();
    } catch (error) {
      console.log(error);
    }
  }

  function getLinkToShop(arr) {
    arr.forEach(el => {
      if (el.name === 'Amazon') {
        amazon_link = el.url;
      } else if (el.name === 'Apple Books') {
        apple_link = el.url;
      } else if (el.name === 'Bookshop') {
        bookshop_link = el.url;
      }
    });
  }

  function renderMarkupModal(markup) {
    refs.cardModal.innerHTML = markup;
  }
  // fetchBookById('643282b1e85766588626a0ba');

  function openModal() {
    //   const isModalOpen =
    //     refs.openModalBtn.getAttribute('aria-expanded') === 'true' || false;
    //   refs.openModalBtn.setAttribute('aria-expanded', !isModalOpen);
    removeWindowEventListener();
    document.body.classList.add('modal-open');
    refs.modal.classList.remove('is-hidden-modal-book');
    document.addEventListener('keydown', logBackdropClick);
    disableBodyScroll(); // Prevent scrolling

    //   const scrollLockMethod = !isModalOpen
    //     ? 'disableBodyScroll'
    //     : 'enableBodyScroll';
    //   bodyScrollLock[scrollLockMethod](document.body);
  }

  function closeModal() {
    document.body.classList.remove('modal-open');
    refs.modal.classList.add('is-hidden-modal-book');
    document.removeEventListener('keydown', logBackdropClick);
    window.addEventListener('click', cardForModal);
    enableBodyScroll(); // Enable scroll
  }

  function logBackdropClick(e) {
    if (e.target.className === 'backdrop-modal-book' || e.code === 'Escape') {
      refs.modal.classList.add('is-hidden-modal-book');
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', logBackdropClick);
      window.addEventListener('click', cardForModal);
    } else return;
  }

  // Disable body scroll when the modal is open
  function disableBodyScroll() {
    document.body.classList.add('modal-open-scroll-lock');
  }

  // Enable body scroll when the modal is closed
  function enableBodyScroll() {
    document.body.classList.remove('modal-open-scroll-lock');
  }

  // Restore scrolling on window load in case the modal was open during a page refresh
  window.addEventListener('load', enableBodyScroll);
})();
