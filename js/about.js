// 1. Ask the user at least four questions and get their input
//
// 2. Keep track of the number of questions that are answered correctly
//
// 3. Write out a message to the user to let them know the number of questions that were correct
//
// 4. Output a message to the element with a quiz-result id the user depending on their score
//    All 5 correct: Complete Success
//    3-4 correct: Almost Good Enough
//    1-2 correct: Sitting on the Edge
//    0 correct: Ultimate failure

document.getElementById('quiz-result').onclick = function() {results()};

function results()
{
  var result = check(id = 'q1d') + check('q2b') + check('q3c') + check('q4c');
  alert("You got " + result + " question(s) correct!");
  var elem = document.getElementsByClassName('container')[0];

  if(result >= 4)
  {
    elem.innerHTML = "All 4 correct: Complete Success";
  }
  else if (result == 3)
  {
    elem.innerHTML = "3 correct: Almost Good Enough";
  }
  else if (result == 1 || result == 2)
  {
    elem.innerHTML = "1-2 correct: Sitting on the Edge";
  }
  else
  {
    elem.innerHTML = "0 correct: Ultimate failure";
  }
}


function check(id)
{
  if (document.getElementById(id).checked) return 1;
  else return 0;
}
