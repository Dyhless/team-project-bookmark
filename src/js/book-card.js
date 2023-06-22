import { BooksService } from './books-service';
import Notiflix from 'notiflix';

import { loader, showLoader, hideLoader } from './loader';

const booksService = new BooksService();
const listTopBooks = document.querySelector('.top-books');

async function renderBooksCategories() {
  try {
    const { data } = await booksService.fetchTopBooks();
    return data;
  } catch (error) {
    console.log(error);
    Notiflix.Notify.failure('Oops! Something went wrong... Please try again.');
  }
}

function getFallbackImageUrl() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    return new URL('../images/plug-empte-book_335x485.png', import.meta.url);
  } else if (screenWidth < 1440) {
    return new URL('../images/plug-empte-book_218x316.png', import.meta.url);
  } else {
    return new URL('../images/plug-empte-book_180x256.png', import.meta.url);
  }
}

async function updateBooksCategories() {
  const categories = await renderBooksCategories();

  let markup = '';

  for (const { list_name, books } of categories) {
    let categoryMarkup = `
      <li>
        <h3 class="name-category">${list_name}</h3>
        <ul class="list-category">
    `;

    for (let j = 0; j < books.length; j += 1) {
      const { _id, book_image, title, author } = books[j];

      categoryMarkup += `
        <li class="item-category-book js-book-modal" data-book-id="${_id}">
          <a class="link-books" href="#">
            <div class="card-book">
              <div class="img-card-book">
                <img src="${book_image}" alt="book" class="img-book" loading="lazy" data-id="${_id}" onerror="src='${getFallbackImageUrl()}'"/>
              </div>
              <div class="bestsellers-text-wrapper">
                <div class="title-wrap">
                  <p class="title-book">${title}</p>
                </div>
                <div class="author-wrap">
                  <p class="book-author">${author}</p>
                </div>
              </div>
            </div>
          </a>
        </li>
      `;
    }

    categoryMarkup += `
        </ul>
        <button type="button" aria-label="See more" class="see-more">See more</button>
      </li>
    `;

    markup += categoryMarkup;
  }

  if (listTopBooks) {
    listTopBooks.innerHTML = '';
    listTopBooks.insertAdjacentHTML('beforeend', markup);
    //     //======= Дашин код ==============
    const seeMoreBtns = document.querySelectorAll('.see-more');
    const categoriesForBtn = document.querySelectorAll('.bookcat');

    for (let p = 0; p < categories.length; p++) {
      seeMoreBtns[p].addEventListener('click', () => {
        categoriesForBtn[p + 1].click();
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      });
    }
    //     //======= /Дашин код ==============
  }
  hideLoader();
}

updateBooksCategories();
