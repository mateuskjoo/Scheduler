$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
    $(".notification").addClass("show");
    setTimeout(function () {
      $(".notification").removeClass("show");
    }, 1500);
  });

  function hourUpdater() {
    const currentHour = dayjs().hour();
    $(".time-block").each(function () {
      const blockHour = parseInt($(this).attr("id").split("-")[1]);
      $(this).toggleClass("past", blockHour < currentHour);
      $(this).toggleClass("present", blockHour === currentHour);
      $(this).toggleClass("future", blockHour > currentHour);
    });
  }

  hourUpdater();
  setInterval(hourUpdater, 15000);
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});

/* Iteration 1
$(document).ready(function () {
$('.saveBtn').on('click', function () {
  var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

  var today = dayjs().format();
  var timeBlockEl = document.querySelector(".container");
  $("#currentDay").text(today("LLLL"));
  // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
  // the code isn't run until the browser has finished rendering all the elements
  // in the html.
  function hourUpdater() {
    var presentTime = current.hour();
    $(".time-block").each(function () {
      var blockTimePeriod = parseInt($(this).attr("id").split("-")[1]);
      if (blockTimePeriod === presentTime) {
        $(this).addClass("present");
      } else if (blockTimePeriod > presentTime) {
        $(this).removeClass("present");
        $(this).addClass("future");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past");
      }
    });
  }
  timdeDay();
  setInterval(timeDay, 1000);
   hourUpdater();
  setInterval(hourUpdater, 15000);
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});
)}); */
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.

/* 

  function hourUpdater() {
    var currentHour = dayjs().hour();
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });

*/