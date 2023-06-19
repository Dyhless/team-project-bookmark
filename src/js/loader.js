const loader = document.querySelector('.loader');

function hideLoader() {
  refs.loader.classList.add('is-hidden');
}

function showLoader() {
  refs.loader.classList.remove('is-hidden');
}
