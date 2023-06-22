const mobileMenuHeader = document.querySelector('header');
const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');

const toggleMenu = () => {
  const isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenuHeader.classList.toggle('is-open');
};

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
