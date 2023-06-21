
import Notiflix from "notiflix";

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

    id = e.target.getAttribute('data-id');
    if (id === null) {
      return;
    } else openModal();
    console.log('это айди', id);
    // обработка ошибки фетча?
    const { book_image, description, author, title, buy_links } =
      await fetchBookById(id);
    getLinkToShop(buy_links);

    const markup = `<img src="${book_image}" alt="book" class="card-img-modal">
<h5 class="title">${title}</h5>
<p class="author-card-modal">${author}</p>
<p class="text-card-modal">${description}</p>
<ul class="shops-modal">
<li class="li-modal">
<a href="${amazon_link}" target="_blank">
<img class="amazon" src="${new URL(
      '../images/shops/amazon_62x19.png',
      import.meta.url
    )}" alt="Amazon"</a>
</li>
<li class="li-modal">
  <a href="${apple_link}" target="_blank">
<img class="apple" src="${new URL(
      '../images/shops/apple-book_33x32.png',
      import.meta.url
    )}" alt="Apple-book"></a>
</li>
<li class="li-modal">
  <a href="${bookshop_link}" target="_blank">
<img class="book-shop" src="${new URL(
      '../images/shops/book-shop_38x36.png',
      import.meta.url
    )}" alt="Book-shop"></a>
</li>
</ul>
`;
    console.log('markup', markup);
    renderMarkupModal(markup);
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
})();
