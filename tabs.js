document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tabs-nav__btn').forEach(function(e) {
    e.addEventListener('click', function(e) {
      const tab = e.currentTarget.dataset.path;
      document.querySelectorAll('.tabs-item').forEach(function(e) {
        e.classList.remove('tabs-item--active')
      });
      document.querySelector(`[data-target='${tab}']`).classList.add('tabs-item--active');
    });
  });
});