import axios, { all } from 'axios';
import Notiflix from 'notiflix';

import { loader, showLoader, hideLoader } from './loader';

const asideList = document.querySelector('.category');
const homePageContainer = document.querySelector('.container-books-card');

const listStructure = `<ul class="categBook"></ul>`;
asideList.insertAdjacentHTML('beforeend', listStructure);
const listOfCateg = document.querySelector('.categBook');

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

//створюємо функцію, яка викликає запити по катекорії
async function getBooksByCategory(categoryName) {
  showLoader();
  homePageContainer.innerHTML = '';
  let allBooksCat = document.querySelectorAll('.bookcat');
  allBooksCat.forEach(element => {
    if (element.classList.contains('current-page')) {
      element.classList.remove('current-page');
    }
  });
  const blabla = document.querySelector(`li[value="${categoryName}"]`);
  blabla.classList.add('current-page');

  try {
    const responseCategoty = await axios.get(
      `https://books-backend.p.goit.global/books/category?category=${categoryName}`
    );
    const dataFile = responseCategoty.data;

    //створюємо заголовок вибраної категорії
    const selectedCatName = document.createElement('h2');
    selectedCatName.classList.add('selected-category-name');
    const words = categoryName.split(' ');
    const lastWordOfCategory = words.pop();
    const cuttedNameOFCategory = words.join(' ');
    selectedCatName.innerHTML = `${cuttedNameOFCategory} <split class="last-word-category">${lastWordOfCategory}</split>`;

    homePageContainer.appendChild(selectedCatName);
    //створюємо новий список
    const newCategoryList = document.createElement('ul');
    newCategoryList.classList.add('selected-category');
    homePageContainer.appendChild(newCategoryList);
    const newBookUl = document.querySelector('.selected-category');

    //створюємо нові результати пошуку і заповняєм список результатів
    dataFile.forEach(bookRes => {
      const newBookLI = document.createElement('li');
      newBookLI.classList.add('book-card-preview');
      const bookFace = `<div class="book-preview-container"">
                          <div class="book-image">
                            <img src="${
                              bookRes.book_image
                            }" class="img-book" alt="book-title-preview" 
                            loading="lazy" onerror="src='${getFallbackImageUrl()}'" data-id="${
        bookRes._id
      }">
                          </div>
                        <div>
                          <h2 class="book-title">${bookRes.title}</h2>
                          <p class="book-author">${bookRes.author}</p>
                        </div></div>`;
      newBookLI.innerHTML = bookFace;
      newBookUl.appendChild(newBookLI);
    });
    hideLoader();
  } catch (error) {
    Notiflix.Notify.failure('Oops! Something went wrong... Please try again.');
    hideLoader();
  }
}

async function getCategoryList() {
  showLoader();
  try {
    const response = await axios.get(
      'https://books-backend.p.goit.global/books/category-list'
    );
    const data = response.data;
    const sortedData = data.sort((a, b) =>
      a.list_name.localeCompare(b.list_name)
    );

    const allCategories = document.createElement('li');
    allCategories.classList.add('bookcat', 'allBooks');
    allCategories.classList.add('current-page');
    allCategories.textContent = 'All categories';
    listOfCateg.appendChild(allCategories);
    const allCatPoint = document.querySelector('.allBooks');
    allCatPoint.addEventListener('click', () => {
      window.location.href = 'index.html';
    });

    // categoryList = document.querySelectorAll('.bookcat');
    sortedData.forEach(category => {
      //створюю елемент списку категорій
      const newLICateg = document.createElement('li');
      newLICateg.classList.add('bookcat');
      newLICateg.setAttribute('value', category.list_name);
      listOfCateg.appendChild(newLICateg);
      newLICateg.innerHTML = category.list_name;

      newLICateg.addEventListener('click', () => {
        getBooksByCategory(category.list_name);
      });
    });
    hideLoader();
  } catch (error) {
    console.log(error);
    hideLoader();
  }
}

window.addEventListener('load', getCategoryList);

//
