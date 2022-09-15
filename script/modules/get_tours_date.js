const loadTours = async (cb) => {
  const result = await fetch('./date.json');
  const data = await result.json();
  cb(data);
};


const insertTours = (data) => {
  const dateSelect = document.querySelector('#reservation__date');
  const peopleSelect = document.querySelector('#reservation__people');

  const tours = data.map((item) => {
    const option = document.createElement('option');
    option.classList.add('tour__option', 'reservation__option');
    option.value = item.date;
    option.textContent = item.date;
    option.dataset.price = item.price;

    return option;
  });

  dateSelect.append(...tours);

  dateSelect.addEventListener('change', () => {
    peopleSelect.innerHTML = `<option value="" class="tour__option 
    reservation__option">Количество человек</option>`;
    // не придумал ничего лучше )
    if (dateSelect.value) {
      for (const key in data) {
        if (dateSelect.value === data[key].date) {
          console.log(data[key]);
          for (let i = data[key]['min-people']; i <= data[key]['max-people']; i++) {
            const select = document.createElement('option');
            select.classList.add('tour__option', 'reservation__option');
            select.value = i;
            select.textContent = i;
            peopleSelect.append(select);
          }
        }
      }
    }
  });

  peopleSelect.addEventListener('change', () => {
    const reservationData = document.querySelector('.reservation__data');
    const reservationPrice = document.querySelector('.reservation__price');
    const dateValue = dateSelect.value;
    const peopleValue = peopleSelect.value;

    reservationData.textContent = `${dateValue}, ${peopleValue} человека`;
    reservationPrice.textContent = `${peopleValue * dateSelect.options[dateSelect.selectedIndex].dataset.price}₽`;
    console.log(dateSelect.options[dateSelect.selectedIndex]);
    console.log(dateSelect.options[dateSelect.selectedIndex].dataset.price);
  });
};


loadTours(insertTours);


// const date = new Date('11.04');
// const options = {
//   weekday: 'long',
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
// };
// console.log(date.toLocaleDateString('ru-RU', options));