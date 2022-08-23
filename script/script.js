'use strict';

const timer = deadline => {
  // функция для склонения слов
  const decCache = [];
  const decCases = [2, 0, 1, 1, 1, 2];

  function decOfNum(number, titles) {
    if (!decCache[number]) decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
    return titles[decCache[number]];
  }

  // таймер

  const timerCountDays = document.querySelector('.timer__count_days');
  const timerUnitsDays = document.querySelector('.timer__units_days');
  const timerCountHours = document.querySelector('.timer__count_hours');
  const timerUnitsHours = document.querySelector('.timer__units_hours');
  const timerCountMinutes = document.querySelector('.timer__count_minutes');
  const timerUnitsMinutes = document.querySelector('.timer__units_minutes');

  const getTimeRemaining = () => {
    const timerDeadline = new Date(deadline.split('/').reverse()).getTime();
    const timeNow = new Date().getTime();
    const timeRemaining = timerDeadline - timeNow;

    const seconds = Math.floor(timeRemaining / 1000 % 60);
    const minutes = Math.floor(timeRemaining / 1000 / 60 % 60);
    const hours = Math.floor(timeRemaining / 1000 / 60 / 60 % 24);
    const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);

    return {
      timeRemaining,
      seconds,
      minutes,
      hours,
      days,
    }
  }

  const start = () => {
    const timer = getTimeRemaining();

    timerCountDays.textContent = timer.days;
    timerUnitsDays.textContent = decOfNum(timer.days, ['день', 'дня', 'дней']);
    timerCountHours.textContent = timer.hours < 10 ? '0' + timer.hours : timer.hours;
    timerUnitsHours.textContent = decOfNum(timer.hours, ['час', 'часа', 'часов']);
    timerCountMinutes.textContent = timer.minutes < 10 ? '0' + timer.minutes : timer.minutes;
    timerUnitsMinutes.textContent = decOfNum(timer.minutes, ['минута', 'минуты', 'минут']);

    const intervalId = setTimeout(start, 1000);

    if (timer.timeRemaining <= 0) {
      clearInterval(intervalId);
      document.querySelector('.hero__text').style.display = 'none';
      document.querySelector('.hero__timer').style.display = 'none';
    }
  };

  start();
}



const timerContainer = document.querySelector('.timer');
const deadline = timerContainer.dataset.timerDeadline;
timer(deadline);