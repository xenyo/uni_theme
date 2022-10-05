(() => {
  const component = 'uni_base:toolbar';
  Drupal.behaviors[component] = {
    attach: (context, settings) => {
      once(component, '.toolbar').forEach(toolbar => {
        const isToolbarHidden = localStorage.getItem("isToolbarHidden");
        document.body.classList.toggle("toolbar-hidden", isToolbarHidden === "true");
        document.addEventListener("keydown", (event) => {
          if (event.key === "F4") {
            const isToolbarHidden = document.body.classList.toggle("toolbar-hidden");
            localStorage.setItem("isToolbarHidden", isToolbarHidden);
          }
        });
      });
    }
  }
})();
