const pageShoppingList = document.querySelector('a#shopping-list');
const pageHome = document.querySelector('a#home');

// Додати клас до поточного посилання при переході на сторінку
window.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('shopping-list.html')) {
      pageShoppingList.classList.add('site-nav__link--current');
      pageHome.classList.remove('site-nav__link--current');
  } else if (window.location.pathname.includes('index.html')) {
      pageHome.classList.add('site-nav__link--current');
      pageShoppingList.classList.remove('site-nav__link--current');
  }
});


// не працює функція