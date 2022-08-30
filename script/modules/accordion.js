const items = document.querySelectorAll('.travel__item');
const buttons = document.querySelectorAll('.travel__item-title');
const textWrapper = document.querySelectorAll('.travel__item-text-wrapper');

let heigthWrapper = 0;

textWrapper.forEach((item) => {
  if (heigthWrapper < item.scrollHeight) {
    heigthWrapper = item.scrollHeight;
  }
});

buttons.forEach((item, index) => {
  item.addEventListener('click', () => {
    for (let i = 0; i < items.length; i++) {
      if (index === i) {
        textWrapper[i].style.height =
          items[i].classList.contains('travel__item_active') ?
          '' : `${heigthWrapper}px`;
        items[i].classList.toggle('travel__item_active');
      } else {
        items[i].classList.remove('travel__item_active');
        textWrapper[i].style.height = '';
      }
    }
  });
});