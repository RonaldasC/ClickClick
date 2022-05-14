'use strict';

// kodas pasirinkti sudėtingumo lygį 
document.getElementsByName('dificulty')[0].addEventListener('onclick', btnRadioChange);
function btnRadioChange(){
    return document.querySelector('input[name="dificulty"]:checked').value;
}
// kodas pradedantis zaidimą 
document.getElementsByClassName('start')[0].addEventListener('click', pradedam);
function pradedam() {
    if ('click') {
        document.getElementsByClassName('startgame')[0].style.display = 'none';
        startGame();
    }
}
//kodo dalis atsakinga už AI1 stulpelio didėjimą
function startGame() {
    
let aiSkaiciuokle = 0;
let laikoskaiciuokle = setInterval(skaiciuojaAistulpelioAuksti, +btnRadioChange());

function skaiciuojaAistulpelioAuksti() {
    aiSkaiciuokle++;
    if (aiSkaiciuokle === 300){
        clearInterval(laikoskaiciuokle);
        document.getElementsByClassName('youLose')[0].style.display = 'block';
        document.getElementsByClassName('endgame')[0].style.display = 'block';
    }
    aiAukscioAtvaizdavimas();
}
function aiAukscioAtvaizdavimas() {
    document.getElementById('ai').style.height = aiSkaiciuokle + 'px';
    
}
//kodo dalis atsakinga už player stulpelio didėjimą
let playerSkaiciuokle = 0;

document.getElementsByClassName('langas')[0].addEventListener('click', playerMouseClicks);

function stopingClickEvent () {
    document.getElementsByClassName('langas')[0].removeEventListener('click', playerMouseClicks);
}

function playerMouseClicks() {

    playerSkaiciuokle++;
    if (playerSkaiciuokle === 300){
        clearInterval(laikoskaiciuokle);//sutabdo ai stulpelio didėjima jei laimi žaidėjas
        stopingClickEvent ();
        document.getElementsByClassName('youWin')[0].style.display = 'block';
        document.getElementsByClassName('endgame')[0].style.display = 'block';
    }   
    playerAukscioAtvaizdavimas();
}
function playerAukscioAtvaizdavimas() {
    document.getElementById('player').style.height = playerSkaiciuokle + 'px';
    }   
}
   
const btnClick = document.getElementsByClassName('btnPlayAgain')[0].addEventListener('click', playAgain);
function playAgain() {
    if ('click') {
        document.getElementsByClassName('endgame')[0].style.display = 'none';
        document.getElementById('player').style.height = '0px';
        startGame();
        document.getElementsByClassName('youWin')[0].style.display = 'none';
        document.getElementsByClassName('youLose')[0].style.display = 'none';
    }
  }
