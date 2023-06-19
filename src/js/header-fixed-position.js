const header = document.querySelector('header');
const body = document.querySelector('body');

window.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    body.style.paddingTop = `${header.offsetHeight}px`;
    header.classList.add('fixed-header');
  } else {
    body.style.paddingTop = 0;
    header.classList.remove('fixed-header');
  }
});

const refs = {
  currentPage: window.location.href,
  navItems: document.querySelectorAll('.site-nav__link'),
};

refs.navItems.forEach(addUnderLine);

function addUnderLine(navItem) {
  if (navItem.href === refs.currentPage) {
    refs.navItems[0].classList.remove('site-nav__link--current');
    navItem.classList.add('site-nav__link--current');
  }
}
