'use strict';
//kodas pradedantis zaidimą
document.getElementById('start').addEventListener('click', pradedam);
function pradedam() {
    if ('click') {
        document.getElementsByClassName('menu')[0].style.display = 'none';
        startSetInterval();
    }
}

//kodo dalis atsakinga už ai stulpelio didėjimą

function startSetInterval() {
    
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
    if (playerSkaiciuokle === 10){
        console.log('Laimėjai');//pakeisti į laimėjimo langą
        clearInterval(laikoskaiciuokle);//sutabdo ai stulpelio didėjima jei laimi žaidėjas
        stopingClickEvent ();
    } 
    playerAukscioAtvaizdavimas();
}
function playerAukscioAtvaizdavimas() {
    document.getElementById('player').style.height = playerSkaiciuokle + 'px';
    }   
}

