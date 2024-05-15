
(function () {
  const burgerEnable = document?.querySelector('[data-burger-enable]');
  const burgerDisable = document?.querySelector('[data-burger-disable]');
  const menu = document?.querySelector('[data-menu]');
  const menuBox = document?.querySelector('[data-menu-box]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const header = document?.querySelector('.header');

  burgerEnable?.addEventListener('click', (e) => {
    header?.classList.add('active');
    menu?.classList.add('menu--active');
    burgerEnable?.classList.add('is-hidden');
    burgerDisable?.classList.remove('is-hidden');
  });

  burgerDisable?.addEventListener('click', (e) => {
    header?.classList.remove('active');
    menu?.classList.remove('menu--active');
    burgerDisable?.classList.add('is-hidden');
    burgerEnable?.classList.remove('is-hidden');
  });

  menu?.addEventListener('click', (e) => {
    if (menuBox.contains(e.target)) return
    header?.classList.remove('active');
    menu.classList.remove('menu--active');
    burgerDisable?.classList.add('is-hidden');
    burgerEnable?.classList.remove('is-hidden');
  });

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      header?.classList.remove('active');
      menu.classList.remove('menu--active');
      burgerDisable?.classList.add('is-hidden');
      burgerEnable?.classList.remove('is-hidden');
    });
  });
})();
