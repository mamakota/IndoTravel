import {
  timer,
} from './modules/timer.js';

const timerContainer = document.querySelector('.timer');
const deadline = timerContainer.dataset.timerDeadline;
timer(deadline);

import './modules/accordion.js';
import './modules/burger.js';
import './modules/fly.js';
import './modules/get_tours_date.js';