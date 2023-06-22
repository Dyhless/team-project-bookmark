const pageShoppingList = document.querySelector('.shopping-list');
const pageHome = document.querySelector('.home');
// const currentShopList = document.querySelector('.shopping-list.site-nav__link--current');

// Додати клас до поточного посилання при переході на сторінку
window.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.endsWith('shopping-list.html')) {
    pageShoppingList.classList.add('site-nav__link--current');
    
    pageHome.classList.remove('site-nav__link--current');
  } else if (window.location.pathname.endsWith('index.html')) {
    pageHome.classList.add('site-nav__link--current');
    pageShoppingList.classList.remove('site-nav__link--current');
  }
});


