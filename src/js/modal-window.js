(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.modal.addEventListener('click', logBackdropClick);
 

  function toggleModal() {
    //   const isModalOpen =
    //     refs.openModalBtn.getAttribute('aria-expanded') === 'true' || false;
    //   refs.openModalBtn.setAttribute('aria-expanded', !isModalOpen);
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle('is-hidden-modal-book');
    document.addEventListener('keydown', logBackdropClick);
  

    //   const scrollLockMethod = !isModalOpen
    //     ? 'disableBodyScroll'
    //     : 'enableBodyScroll';
    //   bodyScrollLock[scrollLockMethod](document.body);
  };
  function logBackdropClick(e) {
    if (e.target.className==="backdrop-modal-book"||e.code==="Escape"){
      refs.modal.classList.add('is-hidden-modal-book');
      document.body.classList.remove("modal-open");
      document.removeEventListener('keydown', logBackdropClickn);
    } else
    console.log('эток клик в бекдроп'); 
console.log("key",e.key);
console.log("code",e);
  }
})();
