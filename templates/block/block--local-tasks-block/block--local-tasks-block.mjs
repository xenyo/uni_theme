import debounce from 'underscore/modules/debounce';

(() => {
  const component = 'uni_base:block--local-tasks-block';
  Drupal.behaviors[component] = {
    attach: (context, settings) => {
      once(component, '.block--local-tasks-block').forEach(block => {
        const update = () => {
          const height = block.offsetHeight;
          document.body.style.paddingBottom = `${height}px`;
        }
        window.addEventListener('resize', debounce(update, 150));
        update();
      });
    }
  }
})();
