import axios, { all } from 'axios';
import Notiflix from 'notiflix';

// вибираєм головний контейнер в category html
const asideList = document.querySelector('.category');
// вибираєм головний контейнер в home page html
const homePageContainer = document.querySelector('.container-books-card');
//вибираєм список результатів пошуку книжок по категоріям

const listStructure = `<ul class="categBook"></ul>`;

// додаємо ул в дів
asideList.insertAdjacentHTML('beforeend', listStructure);
// вибираємо ул
const listOfCateg = document.querySelector('.categBook');

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

//створюємо функцію, яка викликає запити по катекорії
async function getBooksByCategory(categoryName) {
  homePageContainer.innerHTML = '';
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
      const bookFace = `<div class="book-preview-container" id="${bookRes._id}"><div class="book-image">
                          <img src="${bookRes.book_image}" alt="book-title-preview" loading="lazy" onerror="src='${getFallbackImageUrl()}'">
                        </div>
                        <div>
                          <h2 class="book-title">${bookRes.title}</h2>
                          <p class="book-author">${bookRes.author}</p>
                        </div></div>`;
      newBookLI.innerHTML = bookFace;
      newBookUl.appendChild(newBookLI);
    });
  } catch (error) {
    Notiflix.Notify.failure('Oops! Something went wrong... Please try again.');
  }
}

// створюємо функцію, яка буде викликати всі категорії з сервера. Результат роботи цієї функції
// це заповнене бокове меню з вибором категорій книг і встановлений слухач на елементи списка
async function getCategoryList() {
  try {
    const response = await axios.get(
      'https://books-backend.p.goit.global/books/category-list'
    );
    const data = response.data;
    const sortedData = data.sort((a, b) => a.list_name.localeCompare(b.list_name));
    
    
    const allCategories = document.createElement('li');
    allCategories.classList.add('bookcat');
    allCategories.classList.add('allBooks');
    allCategories.textContent = 'All categories';
    listOfCateg.appendChild(allCategories);
    const allCatPoint = document.querySelector('.allBooks');
    allCatPoint.addEventListener('click', ()=>{window.location.href = 'index.html'})
    
    sortedData.forEach(category => {
      //створюю елемент списку категорій
      const newLICateg = document.createElement('li');
      newLICateg.classList.add('bookcat');
      listOfCateg.appendChild(newLICateg);
      newLICateg.innerHTML = category.list_name;

      newLICateg.addEventListener('click', () => {
        //тут виправити нижче
        getBooksByCategory(category.list_name);
      });
    });
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('load', getCategoryList);

// 

