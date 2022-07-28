(() => {
  const refs = {
    openModalBtn: document.querySelector('.js-open-modal-about'),
    closeModalBtn: document.querySelector('.js-modal-close-about'),
    modal: document.querySelector('.about-backdrop'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleMenu);
  refs.closeModalBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
