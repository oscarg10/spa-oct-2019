//Query selector excepts any CSS selector as a string.
const form = document.querySelector("form");
/**
 * 1. Listen for an event
 * 2.Use a CallBack function when this event occurs
 *
 */
form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log(event.target.elements);
});

console.log(form);
