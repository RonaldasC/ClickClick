'use strict';
//kodas pradedantis zaidimą 
document.getElementsByClassName('start')[0].addEventListener('click', pradedam);
function pradedam() {
    if ('click') {
        document.getElementsByClassName('startgame')[0].style.display = 'none';
        startGame();
    }
}

//kodo dalis atsakinga už ai stulpelio didėjimą

function startGame() {
    
let aiSkaiciuokle = 0;
let laikoskaiciuokle = setInterval(naujasKintamasis, 100);

function naujasKintamasis() {
    aiSkaiciuokle++;
    if (aiSkaiciuokle === 300){
        clearInterval(laikoskaiciuokle);
        console.log('Pralaimėjai');
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
    if (playerSkaiciuokle === 5){
        console.log('Laimėjai');//pakeisti į laimėjimo langą
        clearInterval(laikoskaiciuokle);//sutabdo ai stulpelio didėjima jei laimi žaidėjas
        stopingClickEvent ();
        document.getElementsByClassName('endgame')[0].style.display = 'block';
    } 
    playerAukscioAtvaizdavimas();
}
function playerAukscioAtvaizdavimas() {
    document.getElementById('player').style.height = playerSkaiciuokle + 'px';
    }   

   
}

// dalis atsakinga uz zaidimo paleidimą dar kartą
document.getElementsByClassName('btnPlayAgain')[0].addEventListener('click', PlayAgain);
function PlayAgain() {
    if ('click') {
        document.getElementsByClassName('endgame')[0].style.display = 'none';
        document.getElementById('player').style.height = '0px';
        startGame();
    }
}


