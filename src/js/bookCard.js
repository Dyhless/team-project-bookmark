import { BooksService } from './BooksService';
import Notiflix from 'notiflix';

const booksService = new BooksService();
const listTopBooks = document.querySelector('.top-books');

let markup = '';

// ======= Markup Best Seller ==============================
async function renderBooksCategories() {
  try {
    const { data } = await booksService.fetchTopBooks();
    return data;
  } catch (error) {
    console.log(error);
    Notiflix.Notify.failure('Oops! Something went wrong... Please try again.');
  }
}

(async () => {
  const categories = await renderBooksCategories();
  if (window.screen.width < 768) {
    for (let i = 0; i < categories.length; i += 1) {
      const { list_name, books } = categories[i];

      markup += `<li>
    <h3 class="name-category">${list_name}</h3>
      <ul class="list-category">
        <li class="item-category-book" data-book-id="${books[0]._id}">
          <a class="link-books" href="#">
            <div class="card-book">
              <div class="img-card-book">
                <img src="${books[0].book_image}" alt="book" class="img-book">
              </div>
              <div class="bestsellers-text-wrapper">
                <div class="title-wrap">  
                  <p class="book-title">${books[0].title}</p>
                </div>
                <div class="author-wrap">  
                  <p class="book-author">${books[0].author}</p>
                </div>
              </div>
            </div>
         </a>
        </li>
    </ul>
        <button type="button" aria-label="Show more" class="see-more">See more</button>
   </li>`;
    }
  } else if (window.screen.width >= 768 && window.screen.width < 1024) {
    for (let i = 0; i < categories.length; i += 1) {
      const { list_name, books } = categories[i];
      markup += `
    <li>
      <h3 class="name-category">${list_name}</h3>
      <ul class="list-category">
      <li class="item-category-book" data-book-id="${books[0]._id}">
          <a class="link-books" href="#">
            <div class="card-book">
              <div class="img-card-book">
                <img src="${books[0].book_image}" alt="book" class="img-book">
              </div>
              <div class="bestsellers-text-wrapper">
                <div class="title-wrap">  
                  <p class="book-title">${books[0].title}</p>
                </div>
                <div class="author-wrap">  
                  <p class="book-author">${books[0].author}</p>
                </div>
              </div>
            </div>
         </a>
        </li>
        <li class="item-category-book" data-book-id="${books[1]._id}">
          <a class="link-books" href="#">
            <div class="card-book">
              <div class="img-card-book">
                <img src="${books[1].book_image}" alt="book" class="img-book">
              </div>
              <div class="bestsellers-text-wrapper">
                <div class="title-wrap">  
                  <p class="book-title">${books[1].title}</p>
                </div>
                <div class="author-wrap">  
                  <p class="book-author">${books[1].author}</p>
                </div>
              </div>
            </div>
         </a>
        </li>
        <li class="item-category-book" data-book-id="${books[2]._id}">
          <a class="link-books" href="#">
            <div class="card-book">
              <div class="img-card-book">
                <img src="${books[2].book_image}" alt="book" class="img-book">
              </div>
              <div class="bestsellers-text-wrapper">
                <div class="title-wrap">  
                  <p class="book-title">${books[2].title}</p>
                </div>
                <div class="author-wrap">  
                  <p class="book-author">${books[2].author}</p>
                </div>
              </div>
            </div>
         </a>
        </li>
    </ul>
        <button type="button" aria-label="Show more" class="see-more">See more</button>
   </li>`;
    }
  } else {
    for (let i = 0; i < categories.length; i += 1) {
      const { list_name, books } = categories[i];
      markup += `
      <li>
        <h3 class="item-category">${list_name}</h3>
        <ul class="list-category">
          <li class="item-category-book" data-book-id="${books[0]._id}">
          <a class="link-books" href="#">
            <div class="card-book">
              <div class="img-card-book">
                <img src="${books[0].book_image}" alt="book" class="img-book">
              </div>
              <div class="bestsellers-text-wrapper">
                <div class="title-wrap">  
                  <p class="book-title">${books[0].title}</p>
                </div>
                <div class="author-wrap">  
                  <p class="book-author">${books[0].author}</p>
                </div>
              </div>
            </div>
         </a>
        </li>
        <li class="item-category-book" data-book-id="${books[1]._id}">
          <a class="link-books" href="#">
            <div class="card-book">
              <div class="img-card-book">
                <img src="${books[1].book_image}" alt="book" class="img-book">
              </div>
              <div class="bestsellers-text-wrapper">
                <div class="title-wrap">  
                  <p class="book-title">${books[1].title}</p>
                </div>
                <div class="author-wrap">  
                  <p class="book-author">${books[1].author}</p>
                </div>
              </div>
            </div>
         </a>
        </li>
        <li class="item-category-book" data-book-id="${books[2]._id}">
          <a class="link-books" href="#">
            <div class="card-book">
              <div class="img-card-book">
                <img src="${books[2].book_image}" alt="book" class="img-book">
              </div>
              <div class="bestsellers-text-wrapper">
                <div class="title-wrap">  
                  <p class="book-title">${books[2].title}</p>
                </div>
                <div class="author-wrap">  
                  <p class="book-author">${books[2].author}</p>
                </div>
              </div>
            </div>
         </a>
        </li>
        <li class="item-category-book" data-book-id="${books[3]._id}">
          <a class="link-books" href="#">
            <div class="card-book">
              <div class="img-card-book">
                <img src="${books[3].book_image}" alt="book" class="img-book">
              </div>
              <div class="bestsellers-text-wrapper">
                <div class="title-wrap">  
                  <p class="book-title">${books[3].title}</p>
                </div>
                <div class="author-wrap">  
                  <p class="book-author">${books[3].author}</p>
                </div>
              </div>
            </div>
         </a>
        </li>
        <li class="item-category-book" data-book-id="${books[4]._id}">
          <a class="link-books" href="#">
            <div class="card-book">
              <div class="img-card-book">
                <img src="${books[4].book_image}" alt="book" class="img-book">
              </div>
              <div class="bestsellers-text-wrapper">
                <div class="title-wrap">  
                  <p class="book-title">${books[4].title}</p>
                </div>
                <div class="author-wrap">  
                  <p class="book-author">${books[4].author}</p>
                </div>
              </div>
            </div>
         </a>
        </li>        
    </ul>
        <button type="button" aria-label="Show more" class="see-more">See more</button>
   </li>
 `;
    }
  }

  if (listTopBooks) {
    listTopBooks.innerHTML = '';
    listTopBooks.insertAdjacentHTML('beforeend', markup);
  }
})();
