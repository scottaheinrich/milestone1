// 1. Put an on click listen event on each of the buttons
//
// 2. On click it will print out on the console it's name or internal text using a javascript closure
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures



document.getElementById("first").onclick = function() {getText('first')};
document.getElementById("second").onclick = function() {getText('second')};
document.getElementById("third").onclick = function() {getText('third')};


function getText(button)
{
  var text = document.getElementById(button).textContent;
  function logPrint ()
  {
    console.log(text);
  }
  logPrint();

};
