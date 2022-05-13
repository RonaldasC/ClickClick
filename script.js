'use strict';

let skaiciuokle = 0;
let laikoskaiciuoklė = setInterval(naujasKintamasis, 100);

function naujasKintamasis() {
    skaiciuokle++;
    if (skaiciuokle === 300){
        clearInterval(laikoskaiciuoklė);
    }
    aukscioAtvaizdavimas();
    console.log(laikoskaiciuoklė);
}
function aukscioAtvaizdavimas() {
    document.getElementById('ai').style.height = skaiciuokle + 'px';
    document.getElementById('stulpelis').style.height = skaiciuokle+'px';
}



