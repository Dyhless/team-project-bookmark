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
