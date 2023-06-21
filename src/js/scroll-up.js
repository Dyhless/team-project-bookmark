const scrollUpBtn = document.querySelector('.scroll-up');

scrollUpBtn.addEventListener('click', goTop);
window.addEventListener('scroll', trackScroll);

function trackScroll() {
  const offSet = window.pageYOffset;
  const coords = document.documentElement.clientHeight;
  if (offSet > coords) {
    scrollUpBtn.style.display = 'block';
  } else {
    scrollUpBtn.style.display = 'none';
  }
}

function goTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -50);
    setTimeout(goTop, 0);
  }
}
