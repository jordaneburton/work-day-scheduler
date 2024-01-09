// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // listener for click events on save button inside 'time-blocks'
  $('.time-block').on('click', '.saveBtn', function() {
    // uses id as key to localStorage and uses the description 
    // for the storage value
    const hourKey = $(this).parent().attr('id');
    const description = $(this).siblings('.description').val();

    localStorage.setItem(hourKey, description);
  })

  // applies past, present, or future class to each time-block
  // based on id and current hour
  const currentHour = Number(dayjs().format('H'));
  for (block of $('.time-block')) {
    const blockHour = Number(block.id.split('-')[1]);
    block.classList.remove('past', 'present', 'future');

    // checks whether time is past, present, or future
    if (blockHour === currentHour) {
      block.classList.add('present');
    } else if (blockHour < currentHour) {
      block.classList.add('past');
    } else if (blockHour > currentHour) {
      block.classList.add('future');
    }
  }

  // set time-blocks to their corresponding descriptions that
  // are saved in localStorage
  for (block of $('.time-block')) {
    const storageDescription = localStorage.getItem(block.id);
    block.querySelector('.description').value = storageDescription;
  }

  // display the current date in the header of the page
  $('#currentDay').text(dayjs().format('MM/DD/YYYY'));
});
