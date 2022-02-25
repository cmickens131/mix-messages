var randomNum = Math.floor((Math.random()) * 3);
var message;

if (randomNum === 0) {
   message = "Today will be the best day of your life!"; }
   else if (randomNum === 1) {
   message = "Today will be your lucky day!"; }
   else if (randomNum === 2) {
   message = "Today good news are on the way!"; }
   else {
   message = "Welcome!"; }

document.write('<h3>' + message + '</h3>');