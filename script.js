'use strict';
//kodo dalis atsakinga už ai stulpelio didėjimą
let aiSkaiciuokle = 0;

//function laikoSkaiciuokleSustabdyta();
//setTimeout(laikoskaiciuokle, 90000);
// let stopedLaikoSkaiciuokle = clearInterval(laikoskaiciuokle);


// document.getElementsByClassName('langas')[0].addEventListener('click', start());

// function start() {
//     let laikoskaiciuokle = setInterval(naujasKintamasis, 100);
// }


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
    if (playerSkaiciuokle === 300){
        console.log('Laimėjai');//pakeisti į laimėjimo langą
        clearInterval(laikoskaiciuokle);//sutabdo ai stulpelio didėjima jei laimi žaidėjas
        stopingClickEvent ();

    } 
    playerAukscioAtvaizdavimas();
    
}
function playerAukscioAtvaizdavimas() {
    document.getElementById('player').style.height = playerSkaiciuokle + 'px';
}



