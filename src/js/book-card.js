import { BooksService } from './books-service';
import Notiflix from 'notiflix';

import { loader, showLoader, hideLoader } from './loader';

const booksService = new BooksService();
const listTopBooks = document.querySelector('.top-books');

let markup = '';

// ======= Markup Best Seller ==============================
// async function renderBooksCategories() {
//   try {
//     const { data } = await booksService.fetchTopBooks();
//     return data;
//   } catch (error) {
//     console.log(error);
//     Notiflix.Notify.failure('Oops! Something went wrong... Please try again.');
//   }
// }

// (async () => {
//   const categories = await renderBooksCategories();
//   if (window.innerWidth < 768) {
//     for (let i = 0; i < categories.length; i += 1) {
//       const { list_name, books } = categories[i];

//       markup += `<li>
//     <h3 class="name-category">${list_name}</h3>
//       <ul class="list-category">
//         <li class="item-category-book js-book-modal" data-book-id="${
//           books[0]._id
//         }">
//           <a class="link-books" href="#">
//             <div class="card-book">
//               <div class="img-card-book">
//                 <img src="${
//                   books[0].book_image
//                 }" alt="book" class="img-book" loading="lazy" data-id="${
//         books[0]._id
//       } onerror="src='${new URL(
//         '../images/plug-empte-book_218x316.png',
//         import.meta.url
//       )}'
//       "/>
//               </div>
//               <div class="bestsellers-text-wrapper">
//                 <div class="title-wrap">
//                   <p class="title-book">${books[0].title}</p>
//                 </div>
//                 <div class="author-wrap">
//                   <p class="book-author">${books[0].author}</p>
//                 </div>
//               </div>
//             </div>
//          </a>
//         </li>
//     </ul>
//         <button type="button" aria-label="Show more" class="see-more">See more</button>
//    </li>`;
//     }
//   } else if (window.screen.width >= 768 && window.screen.width < 1440) {
//     for (let i = 0; i < categories.length; i += 1) {
//       const { list_name, books } = categories[i];
//       markup += `
//     <li>
//       <h3 class="name-category">${list_name}</h3>
//       <ul class="list-category">
//       <li class="item-category-book js-book-modal" data-book-id="${books[0]._id}">
//           <a class="link-books" href="#">
//             <div class="card-book">
//               <div class="img-card-book">
//                 <img src="${books[0].book_image}" alt="book" class="img-book" loading="lazy" data-id="${books[0]._id} onerror="src='new URL(
//           '../images/plug-empte-book_218x316.png',
//            import.meta.url'"/>
//               </div>
//               <div class="bestsellers-text-wrapper">
//                 <div class="title-wrap">
//                   <p class="title-book">${books[0].title}</p>
//                 </div>
//                 <div class="author-wrap">
//                   <p class="book-author">${books[0].author}</p>
//                 </div>
//               </div>
//             </div>
//          </a>
//         </li>
//         <li class="item-category-book js-book-modal" data-book-id="${books[1]._id}">
//           <a class="link-books" href="#">
//             <div class="card-book">
//               <div class="img-card-book">
//                 <img src="${books[1].book_image}" alt="book" class="img-book" loading="lazy" data-id="${books[1]._id}/>
//               </div>
//               <div class="bestsellers-text-wrapper">
//                 <div class="title-wrap">
//                   <p class="title-book">${books[1].title}</p>
//                 </div>
//                 <div class="author-wrap">
//                   <p class="book-author">${books[1].author}</p>
//                 </div>
//               </div>
//             </div>
//          </a>
//         </li>
//         <li class="item-category-book js-book-modal" data-book-id="${books[2]._id}">
//           <a class="link-books" href="#">
//             <div class="card-book">
//               <div class="img-card-book">
//                 <img src="${books[2].book_image}" alt="book" class="img-book" loading="lazy" data-id="${books[2]._id}/>
//               </div>
//               <div class="bestsellers-text-wrapper">
//                 <div class="title-wrap">
//                   <p class="title-book">${books[2].title}</p>
//                 </div>
//                 <div class="author-wrap">
//                   <p class="book-author">${books[2].author}</p>
//                 </div>
//               </div>
//             </div>
//          </a>
//         </li>
//     </ul>
//         <button type="button" aria-label="Show more" class="see-more">See more</button>
//    </li>`;
//     }
//   } else {
//     for (let i = 0; i < categories.length; i += 1) {
//       const { list_name, books } = categories[i];
//       markup += `
//       <li>
//         <h3 class="name-category">${list_name}</h3>
//         <ul class="list-category">
//           <li class="item-category-book js-book-modal" data-book-id="${books[0]._id}">
//           <a class="link-books" href="#">
//             <div class="card-book">
//               <div class="img-card-book">
//                 <img src="${books[0].book_image}" alt="book" class="img-book" loading="lazy" data-id="${books[0]._id}/>
//               </div>
//               <div class="bestsellers-text-wrapper">
//                 <div class="title-wrap">
//                   <p class="title-book">${books[0].title}</p>
//                 </div>
//                 <div class="author-wrap">
//                   <p class="book-author">${books[0].author}</p>
//                 </div>
//               </div>
//             </div>
//          </a>
//         </li>
//         <li class="item-category-book js-book-modal" data-book-id="${books[1]._id}">
//           <a class="link-books" href="#">
//             <div class="card-book">
//               <div class="img-card-book">
//                 <img src="${books[1].book_image}" alt="book" class="img-book" loading="lazy" data-id="${books[1]._id}/>
//               </div>
//               <div class="bestsellers-text-wrapper">
//                 <div class="title-wrap">
//                   <p class="title-book">${books[1].title}</p>
//                 </div>
//                 <div class="author-wrap">
//                   <p class="book-author">${books[1].author}</p>
//                 </div>
//               </div>
//             </div>
//          </a>
//         </li>
//         <li class="item-category-book js-book-modal" data-book-id="${books[2]._id}">
//           <a class="link-books" href="#">
//             <div class="card-book">
//               <div class="img-card-book">
//                 <img src="${books[2].book_image}" alt="book" class="img-book" loading="lazy" data-id="${books[2]._id}/>
//               </div>
//               <div class="bestsellers-text-wrapper">
//                 <div class="title-wrap">
//                   <p class="title-book">${books[2].title}</p>
//                 </div>
//                 <div class="author-wrap">
//                   <p class="book-author">${books[2].author}</p>
//                 </div>
//               </div>
//             </div>
//          </a>
//         </li>
//         <li class="item-category-book js-book-modal" data-book-id="${books[3]._id}">
//           <a class="link-books" href="#">
//             <div class="card-book">
//               <div class="img-card-book">
//                 <img src="${books[3].book_image}" alt="book" class="img-book" loading="lazy" data-id="${books[3]._id}/>
//               </div>
//               <div class="bestsellers-text-wrapper">
//                 <div class="title-wrap">
//                   <p class="title-book">${books[3].title}</p>
//                 </div>
//                 <div class="author-wrap">
//                   <p class="book-author">${books[3].author}</p>
//                 </div>
//               </div>
//             </div>
//          </a>
//         </li>
//         <li class="item-category-book js-book-modal" data-book-id="${books[4]._id}">
//           <a class="link-books" href="#">
//             <div class="card-book">
//               <div class="img-card-book">
//                 <img src="${books[4].book_image}" alt="book" class="img-book" loading="lazy" data-id="${books[4]._id}/>
//               </div>
//               <div class="bestsellers-text-wrapper">
//                 <div class="title-wrap">
//                   <p class="title-book">${books[4].title}</p>
//                 </div>
//                 <div class="author-wrap">
//                   <p class="book-author">${books[4].author}</p>
//                 </div>
//               </div>
//             </div>
//          </a>
//         </li>
//     </ul>
//         <button type="button" aria-label="Show more" class="see-more">See more</button>
//    </li>
//  `;
//     }
//   }

//   if (listTopBooks) {
//     listTopBooks.innerHTML = '';
//     listTopBooks.insertAdjacentHTML('beforeend', markup);
//     // ======= Дашин код ==============
//     const seeMoreBtns = document.querySelectorAll('.see-more');
//     const categoriesForBtn = document.querySelectorAll('.bookcat');

//     for (let p = 0; p < categories.length; p++) {
//       seeMoreBtns[p].addEventListener('click', () => {
//         categoriesForBtn[p + 1].click();
//         window.scrollTo({
//           top: 0,
//           behavior: 'smooth',
//         });
//       });
//     }
//     //======= /Дашин код ==============
//   }
// })();

// ======= 2 variant  =========
async function renderBooksCategories() {
  try {
    const { data } = await booksService.fetchTopBooks();
    return data;
  } catch (error) {
    console.log(error);
    Notiflix.Notify.failure('Oops! Something went wrong... Please try again.');
  }
}

const updateBooksCategories = async () => {
  const categories = await renderBooksCategories();
  let numBooksToShow = 5;

  if (window.innerWidth < 768) {
    numBooksToShow = 1;
  } else if (window.innerWidth < 1440) {
    numBooksToShow = 3;
  } else {
    numBooksToShow = 5;
  }

  markup = '';

  for (let i = 0; i < categories.length; i += 1) {
    const { list_name, books } = categories[i];

    let categoryMarkup = `
      <li>
        <h3 class="name-category">${list_name}</h3>
        <ul class="list-category">
    `;

    for (let j = 0; j < numBooksToShow && j < books.length; j += 1) {
      const { _id, book_image, title, author } = books[j];

      function getFallbackImageUrl() {
        const screenWidth = window.innerWidth;

        if (screenWidth < 768) {
          return new URL(
            '../images/plug-empte-book_335x485.png',
            import.meta.url
          );
        } else if (screenWidth < 1440) {
          return new URL(
            '../images/plug-empte-book_218x316.png',
            import.meta.url
          );
        } else {
          return new URL(
            '../images/plug-empte-book_180x256.png',
            import.meta.url
          );
        }
      }
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
};

window.addEventListener('resize', updateBooksCategories);

// Initial rendering
updateBooksCategories();
