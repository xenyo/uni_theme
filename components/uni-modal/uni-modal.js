(()=>{const e="uni_theme.uni-modal";Drupal.behaviors[e]={attach:(o,a)=>{once(e,".uni-modal").forEach((e=>{e.querySelectorAll("[data-uni-modal-close]").forEach((o=>{o.addEventListener("click",(()=>{e.classList.remove("is-open"),document.body.classList.remove("overflow-hidden")}))}))}))}}})();
//# sourceMappingURL=uni-modal.js.map
