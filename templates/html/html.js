(() => {
  const component = 'uni_base:html';
  
  Drupal.behaviors[component] = {
    attach: (context, settings) => {
      once(component, 'html', context).forEach(el => {
        console.log("Hello uni_base!")
      });
    }
  }
})();
