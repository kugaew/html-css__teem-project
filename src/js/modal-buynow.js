(() => {
  const refs = {
    openModalBtn: document.querySelector('.js-open-buynow'),
    closeModalBtn: document.querySelector('.js-close-buynow'),
    modal: document.querySelector('.buynow__backdrop'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleMenu);
  refs.closeModalBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
