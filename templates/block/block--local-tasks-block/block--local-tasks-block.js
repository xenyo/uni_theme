import debounce from 'underscore/modules/debounce';

(() => {
  const component = 'uni_base:block--local-tasks-block';
  Drupal.behaviors[component] = {
    attach: (context, settings) => {
      once(component, '.block--local-tasks-block').forEach(block => {
        window.addEventListener('resize', debounce(() => {
          const height = block.offsetHeight;
          document.body.style.paddingBottom = `${height}px`;
        }, 150));
      });
    }
  }
})();
