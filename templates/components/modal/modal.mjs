(() => {
  const behavior = 'uni_base.modal';

  Drupal.behaviors[behavior] = {
    attach: (context, settings) => {
      once(behavior, '.modal').forEach(modal => {
        modal.querySelectorAll('[data-modal-close]').forEach(el => {
          el.addEventListener('click', () => {
            modal.classList.remove('is-open');
          });
        });
      });
    },
  };
})();
