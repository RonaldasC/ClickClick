'use strict';

// kodas pasirinkti sudėtingumo lygį 
document.getElementsByName('dificulty')[0].addEventListener('onclick', btnRadioChange);
function btnRadioChange(){
    return document.querySelector('input[name="dificulty"]:checked').value;
}

function dificulty(){
    if (btnRadioChange() >= 1000) {
        return  1000;
    }
    if (btnRadioChange() >= 100) {
        return 100;
    }
    if (btnRadioChange() >= 10) {
        return 10;
    }
    if (btnRadioChange() >= 1) {
        return 1;
    }
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
let laikoskaiciuokle = setInterval(skaiciuojaAistulpelioAuksti, dificulty());

function skaiciuojaAistulpelioAuksti() {
    aiSkaiciuokle++;
    if (aiSkaiciuokle === 300){
        clearInterval(laikoskaiciuokle);
        console.log('Pralaimėjai');
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
