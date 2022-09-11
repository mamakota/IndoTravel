const btnMenu = document.querySelector('.header__menu-button');
const menu = document.querySelector('.header__menu');
menu.style.translate = `0 -100%`;

let top = 0;

const stepFly = () => {
  console.log(top);
  top += 10;
  menu.style.translate = `0 ${top}%`;
  if (top < 0) {
    requestAnimationFrame(stepFly);
  }
};

const openMenu = () => {
  if (!(menu.classList.contains('header__menu_active'))) {
    stepFly();
  }
  menu.classList.add('header__menu_active');
};

const closeMenu = () => {
  menu.classList.remove('header__menu_active');
  menu.style.translate = `0 -100%`;
  top = 0;
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