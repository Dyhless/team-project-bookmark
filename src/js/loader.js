const loader = document.querySelector('.loader');

function hideLoader() {
  loader.classList.add('is-hidden');
}

function showLoader() {
  loader.classList.remove('is-hidden');
}

export { loader, hideLoader, showLoader };
