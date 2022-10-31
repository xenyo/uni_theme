(() => {
  const component = 'uni_theme:block--local-tasks-block';
  Drupal.behaviors[component] = {
    attach: (context, settings) => {
      once(component, '.block--local-tasks-block').forEach(block => {
        const update = () => {
          const height = block.offsetHeight;
          document.body.style.paddingBottom = `${height}px`;
        }
        window.addEventListener('resize', _.debounce(update, 150));
        update();
      });
    }
  }
})();
