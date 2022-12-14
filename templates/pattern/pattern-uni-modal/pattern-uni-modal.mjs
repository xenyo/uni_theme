(() => {
  const behavior = 'uni_theme.uni-modal';

  Drupal.behaviors[behavior] = {
    attach: (context, settings) => {
      once(behavior, '.uni-modal').forEach(modal => {
        modal.querySelectorAll('[data-uni-modal-close]').forEach(el => {
          el.addEventListener('click', () => {
            modal.classList.remove('is-open');
            document.body.classList.remove('overflow-hidden');
          });
        });
      });
    },
  };
})();
