//Game variables
let turn = true;
let turnsLeft = 10;
let score = 0;

// Elements
const currentGuessElem = document.querySelector('#currentguess');
const currentPopElem = document.querySelector('#currentpop');
const scoreBoardElem = document.querySelector('.scoreboard');
const scoreElem = document.querySelector('#score');
const allScoreElem = document.querySelector('#allscore');
const turnElem = document.querySelector('#turn');

document.querySelector('#nextguess').addEventListener('click', nextGuess, false);
document.addEventListener('keydown', (e) => (e.keyCode == 13) && nextGuess(), false);

let currentGuess = cities[Math.floor((Math.random() * 60))];
writeCurrentGuess();

//Event handler
function gameGuess(coords) {
    if(!turn) return;

    let diff = {
        x: Math.abs(coords.x - currentGuess.lat),
        y: Math.abs(coords.y - currentGuess.lng)
    }
    diff.mean = (diff.x + diff.y) / 2;

    let penalty = diff.mean * 400;
    (penalty > 1000) && (penalty = 1000);
    let currentScore = (penalty > 25) ? (1000 - penalty) || 0 : 1000;

    score += currentScore;
    turn = false;

    drawCoords(currentGuess, coords);

    turnsLeft--;
    showScore(currentScore);

    if(turnsLeft <= 1) finishGame();
}

//Visuals
function writeCurrentGuess() {
    currentGuessElem.innerHTML = currentGuess.name;
    currentPopElem.innerHTML = currentGuess.population.toLocaleString();
    turnElem.innerHTML = 11 - turnsLeft;
}

function showScore(currentScore) {
    scoreElem.innerHTML = currentScore.toFixed(0);
    allScoreElem.innerHTML = score.toFixed(0);
    scoreBoardElem.style.right = "0px";
}

function nextGuess() {
    if(turn) return;
    if(turnsLeft <= 1) return;
    
    currentGuess = cities[Math.floor((Math.random() * 60))];
    writeCurrentGuess();

    initMap();
    turn = true;
    scoreBoardElem.style.right = "-130px";
}

function finishGame() {
    document.querySelector('#nextguess').style.display = "none";
}