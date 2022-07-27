(() => {
  const refs = {
    openModalBtn: document.querySelector('.js-open-modal-f'),
    closeModalBtn: document.querySelector('.js-modal-close-f'),
    modal: document.querySelector('.contacts-franchise-backdrop'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleMenu);
  refs.closeModalBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
