const btnMenu = document.querySelector('.header__menu-button');
const menu = document.querySelector('.header__menu');

const openMenu = () => {
  menu.classList.add('header__menu_active');
};

const closeMenu = () => {
  menu.classList.remove('header__menu_active');
};


btnMenu.addEventListener('click', () => {
  openMenu();
});

menu.addEventListener('click', (e) => {
  if (e.target.classList.contains('header__link')) {
    closeMenu();
  }
});

// не уверен что это оптимальное решение!!
document.querySelector('body').addEventListener('click', (e) => {
  if (!(e.target.classList.contains('header__menu')) && e.target !== btnMenu) {
    closeMenu();
  }
});