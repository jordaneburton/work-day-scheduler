# work-day-scheduler
A simple calendar app for tracking your typical 9-to-5 work day, powered by jQuery and Day.js: [Click to go to website](https://jordaneburton.github.io/work-day-scheduler/)

## Description

For this project, I had to write code in Javascript for the functionality of the calendar application. There were 2 main requirements for the project: color-code the time-blocks by whether they are in the past, present, or future, and save any events for each hour in localStorage. The time-blocks are separated by the hour, starting from 9am and ending at 5pm. For each time-block, you can input any plans or events you might have during that hour. Next to each time-block is a blue save button that can be clicked to save your plans to your localStorage. In addition, the application also displays the current day. However, the events for each hour will persist into the next day.

Regarding the color-coding of the time-blocks, any hours that have already passed will be grey, any hours yet to pass will be green, and the current hour will appear red. This is done by looping through all of our time-blocks and comparing them to the current time, which is acquired using Day.js.

In order to operate the save buttons, for each time-block we delegate a click event listener to the buttons. When a save button is clicked, we look for the corresponding hour id of its time-block and the description text, and we save that information to localStorage with the hour id as the key. When the page is refreshed or opened, each time-block looks for its id as a key in localStorage. It then takes the values and uses them to fill the description texts. This allows the user to input events and plans and have them saved throughout the day.

Here is a link to the deployed project: [https://jordaneburton.github.io/work-day-scheduler/]

### Dependencies

* An up-to-date browser

## Authors

Jordan Burton 
[@jordaneburton](https://github.com/jordaneburton)