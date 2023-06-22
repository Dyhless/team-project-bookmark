const loader = document.querySelector('.loader-backdrop');

function hideLoader() {
  loader.classList.add('loader-visible');
}

function showLoader() {
  loader.classList.remove('loader-visible');
}

export { loader, hideLoader, showLoader };
