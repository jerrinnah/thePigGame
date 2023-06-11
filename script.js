'use strict';

let scores, roundScore, activePlayer, gameplaying;

init();

let x = document.querySelector('#score--0').textContent;
console.log(x);

function btn() {
  //Do something
}

document.querySelector('.btn--roll').addEventListener('click', function () {
  if (gameplaying) {
    //1 - Get a random number
    let dice = Math.floor(Math.random() * 6) + 1;

    //2- Display the result
    let diceDom = document.querySelector('.dice');

    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

    //Update the RoundScore only if the result is not 1
    if (dice !== 1) {
      roundScore += dice;
      document.querySelector('#current--' + activePlayer).textContent =
        roundScore;
      //Add sccore
    } else {
      //The next player
      nextPlayer();
    }
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  //Add the CURRENT score  to the  player's GLOBAL score
  if (gameplaying) {
    scores[activePlayer] += roundScore;
    
      //Update the UI
      document.querySelector('#score--' + activePlayer).textContent =
        scores[activePlayer];
        
          //Check if player won the game
        
          if (scores[activePlayer] >= 10) {
            document.querySelector('#name--' + activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display = 'none';
            gameplaying = false;
          } else {
            //Next Player
            nextPlayer();
          }
  }
});

document.querySelector('.btn--new').addEventListener('click', init);

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById('current--0').textContent = '0';
  document.getElementById('current--1').textContent = '0';

  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');

  document.querySelector('.dice').style.display = 'none';
}

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gameplaying = true;

  document.querySelector('.dice').style.display = 'none';
  document.getElementById('score--0').textContent = '0';
  document.getElementById('score--1').textContent = '0';
  document.getElementById('current--0').textContent = '0';
  document.getElementById('current--1').textContent = '0';

  document.querySelector('#name--0').textContent = 'Player 1';
  document.querySelector('#name--1').textContent = 'Player 2';
}
