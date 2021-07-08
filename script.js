'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let seceretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = seceretNumber;
// define outside button handler function bc otherwise it would change on every click. I want the number to stay the same.
let scoreState = 20;
let highscore = 0;

//max value and we use let so we an later decrease or increase score.
document.querySelector('.check').addEventListener('click', function () {
  // .check is the button class for the event i want to take action on. 'click' is the event i'm looking for.
  const guess = Number(document.querySelector('.guess').value);
  // .guess is the input element  class name that i want to get the value from
  // return value.
  // change guess value to string bc UI inout is always string. If you want to compare a number to a number you must conver it to a number with the Number() function
  console.log(guess, typeof guess);
  if (!guess) {
    //any value in the condition part will be evaluated as a boolean. Need a  true value in the () to run code in {}.

    //when there is no input
    document.querySelector('.message').textContent = 'No Number! ⛔️';

    // when player wins
  } else if (guess === seceretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!🎉';
    document.querySelector('.number').textContent = seceretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highScore').textContent = 'highscore';
    }

    // when player guess us too high
  } else if (guess > seceretNumber) {
    if (scoreState > 1) {
      document.querySelector('.message').textContent =
        'Uh-Oh, Number is Too High!↖️';
      scoreState--;
      document.querySelector('.score').textContent = scoreState;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST THE GAME 😰';
      document.querySelector('.score').textContent = 0;
    }

    //same as writing score = score -1
    document.querySelector('.score').textContent = scoreState;
    // to update the score on the UI i need to call it again

    //when guess is too low.
  } else if (guess < seceretNumber) {
    if (scoreState > 1) {
      document.querySelector('.messages').textContent =
        'Uh-Oh, Number is Too Low!↘️';
      scoreState--;
      document.querySelector('.score').textContent = scoreState;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST THE GAME 😰';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //document.querySelector('.score').textContent = 20;
  score = 20;
  document.querySelector('.score').textContent = score;
  seceretNumber = Math.trunc(Math.random() * 20) + 1;
  //reassign the secret number. make sure the variable is let not const
  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').textContent = '';
});
