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
// let currentGuess = cities[59];
let prevGuesses = [currentGuess.rank];
writeCurrentGuess();

//Event handler
function gameGuess(coords) {
    if(!turn) return;

    let diff = (Math.abs(coords.lat - currentGuess.lat) + Math.abs(coords.lng - currentGuess.lng)) / 2;

    let penalty = diff * 400;
    (penalty > 1000) && (penalty = 1000);
    // let currentScore = (penalty > 25) ? (1000 - penalty) || 0 : 1000;
    (penalty > 25) ? !(currentScore = (1000 - penalty)) && (drawIncorrectCoords(coords)) : (currentScore = 1000);

    score += currentScore;
    turn = false;

    drawCorrectCoords(currentGuess);

    turnsLeft--;
    showScore(currentScore);

    if(turnsLeft < 1) finishGame();
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
    if(turnsLeft < 1) return;
    
    let nextCity;
    do { nextCity = Math.floor((Math.random() * 60)); } 
    while (prevGuesses.includes(nextCity - 1));

    currentGuess = cities[nextCity];
    prevGuesses.push(nextCity);
    writeCurrentGuess();

    initMap();
    turn = true;
    scoreBoardElem.style.right = "-130px";
    console.log(prevGuesses);
}

function finishGame() {
    document.querySelector('#nextguess').style.display = "none";
}