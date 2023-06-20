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

    id = e.target.getAttribute('data-id');
    if (id === null) {
      return;
    } else openModal();
    console.log('это айди', id);
    // обработка ошибки фетча?
    const { book_image, description, author, title } = await fetchBookById(id);

    bookData = {
      _id: id,
      book_image,
      description,
      author,
      title,
    };

    const markup = `<img src="${book_image}" alt="book" class="card-img-modal">
<h5 class="title">${title}</h5>
<p class="author-card-modal">${author}</p>
<p class="text-card-modal">${description}</p>`;
    console.log('markup', markup);

    renderMarkupModal(markup);
  }

  function renderMarkupModal(markup) {
    refs.cardModal.innerHTML = markup;
  }
  // fetchBookById('643282b1e85766588626a0ba');

  async function fetchBookById(id) {
    const responce = await fetch(
      `https://books-backend.p.goit.global/books/${id}`
    );
    const bookById = await responce.json();
    console.log(bookById);
    return bookById;
  }

  function openModal() {
    //   const isModalOpen =
    //     refs.openModalBtn.getAttribute('aria-expanded') === 'true' || false;
    //   refs.openModalBtn.setAttribute('aria-expanded', !isModalOpen);
    removeWindowEventListener();
    document.body.classList.add('modal-open');
    refs.modal.classList.remove('is-hidden-modal-book');
    document.addEventListener('keydown', logBackdropClick);

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
  }

  function logBackdropClick(e) {
    if (e.target.className === 'backdrop-modal-book' || e.code === 'Escape') {
      refs.modal.classList.add('is-hidden-modal-book');
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', logBackdropClick);
      window.addEventListener('click', cardForModal);
    } else return;
  }

  // ========== Додавання до localStorage ==========
  let bookData = {};
  const addBtn = document.querySelector('.js-add-to-list');

  addBtn.addEventListener('click', addToShoppingList);

  const BOOKS_STORAGE = 'books';

  function isInShoppingList(bookId) {
    let booksDataJson = localStorage.getItem(BOOKS_STORAGE);
    if (!booksDataJson) {
      return false;
    }
    let booksData = JSON.parse(booksDataJson);
    return booksData.some(book => book._id === bookId);
  }

  function addToShoppingList() {
    if (isInShoppingList(bookData._id)) {
      console.log('Книга вже є у списку покупок');
    } else {
      let booksDataJson = localStorage.getItem(BOOKS_STORAGE);
      let booksData = [];
      if (booksDataJson) {
        booksData = JSON.parse(booksDataJson);
      }
      booksData.push(bookData);
      localStorage.setItem(BOOKS_STORAGE, JSON.stringify(booksData));
      console.log('Вітаємо! Ви додали книгу до списку покупок');
    }
  }
})();
