const fly = document.createElement('div');

fly.style.cssText = `
  position: fixed; 
  background: url('img/airplane.svg') center/contain;
  width: 50px; 
  height: 50px;
  right: 0;
  bottom:0;
  pointer-events:none;
`;
if (document.documentElement.scrollWidth > 757) {
  document.body.append(fly);
};

let lastScrollTop = 0;

const calcFlyPosition = () => {
  const maxTop = document.documentElement.clientHeight - fly.clientHeight;
  const maxScroll = document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const percentScroll = (window.pageYOffset * 100) / maxScroll;
  const top = maxTop * (percentScroll / 100);

  fly.style.translate = `0  ${-top}px`;

  const scrollTop = window.pageYOffset;
  if (lastScrollTop > scrollTop) {
    fly.style.rotate = 180 + 'deg';
  } else {
    fly.style.rotate = 0 + 'deg';
  }
  lastScrollTop = scrollTop;
};

window.addEventListener('scroll', () => {
  requestAnimationFrame(calcFlyPosition);
});

calcFlyPosition();