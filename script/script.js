import {
  timer,
} from './modules/timer.js';

const timerContainer = document.querySelector('.timer');
const deadline = timerContainer.dataset.timerDeadline;
timer(deadline);