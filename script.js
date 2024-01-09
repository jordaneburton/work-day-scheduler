// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  // listener for click events on save button inside 'time-blocks'
  $('.time-block').on('click', '.saveBtn', function() {
    // uses id as key to localStorage and uses the description 
    // for the storage value
    const hourKey = $(this).parent().attr('id');
    const description = $(this).siblings('.description').val();

    localStorage.setItem(hourKey, description);
  })

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  // applies past, present, or future class to each time-block
  // based on id and current hour
  const currentHour = Number(dayjs().format('H'));
  for (block of $('.time-block')) {
    const blockHour = Number(block.id.split('-')[1]);
    block.classList.remove('past', 'present', 'future');

    if (blockHour === currentHour) {
      block.classList.add('present');
    } else if (blockHour < currentHour) {
      block.classList.add('past');
    } else if (blockHour > currentHour) {
      block.classList.add('future');
    }
  }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  // set time-blocks to their corresponding descriptions that
  // are saved in localStorage
  for (block of $('.time-block')) {
    const storageDescription = localStorage.getItem(block.id);
    block.querySelector('.description').value = storageDescription;
  }

  // display the current date in the header of the page
  $('#currentDay').text(dayjs().format('MM/DD/YYYY'));
});
