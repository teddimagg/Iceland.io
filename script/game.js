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

let currentGuess = cities[Math.floor((Math.random() * cities.length))];
let prevGuesses = [currentGuess.rank - 1];

writeCurrentGuess();

//Event handler
function gameGuess(coords) {
    if(!turn) return; //Between scoreboards turn = false

    //Get's the absolute distance between location and guess
    let diff = (Math.abs(coords.lat - currentGuess.lat) + Math.abs(coords.lng - currentGuess.lng)) / 2;

    //Calculates score, penalty and calls marker draws
    let penalty = diff * 500, currentScore = 0;
    (penalty > 1000) && (penalty = 1000);
    (penalty > 25) ? drawIncorrectCoords(coords) && (currentScore = 1000 - penalty) : currentScore = 1000;
    drawCorrectCoords(currentGuess);

    //Iterates score and turns accordingly and displays them
    score += currentScore, turn = false;;
    turnsLeft--;
    showScore(currentScore);

    //Finishes game if there are no turns left
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
    //Checks validity params
    if(turn) return;
    if(turnsLeft < 1) return;

    //Randomized next city
    let nextCity;
    do { nextCity = Math.floor((Math.random() * cities.length)); }
    while (prevGuesses.includes(nextCity));

    //Sets the next city as a guess and stores it to avoid duplicity
    currentGuess = cities[nextCity];
    prevGuesses.push(nextCity);
    writeCurrentGuess();

    //Resets map, turn and hides scoreboard
    initMap();
    turn = true;
    scoreBoardElem.style.right = "-130px";
}

function finishGame() {
    document.querySelector('#nextguess').style.display = "none";
}