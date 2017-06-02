//Game variables
let turn = true;
let turnsLeft = 10;
let score = 0;
let difficulty = 2;

// Elements
const elems = {
    guess: document.querySelector('#currentguess'),
    population: document.querySelector('#currentpop'),
    scoreboard: document.querySelector('.scoreboard'),
    currentscore: document.querySelector('#score'),
    allscore: document.querySelector('#allscore'),
    turn: document.querySelector('#turn')
}

//Event listeners
document.querySelector('#nextguess').addEventListener('click', nextGuess, false);
document.addEventListener('keydown', (e) => (e.keyCode == 13 || e.keyCode == 32) && nextGuess(), false); //Space or Enter equals pressing next guess


let currentGuess = cities[Math.floor((Math.random() * Math.floor((cities.length))/3 * difficulty ))];
let prevGuesses = [currentGuess.rank - 1];

writeCurrentGuess();

//Event handler
function gameGuess(coords) {
    if(!turn) return; //Between scoreboards turn = false

    //Get's the absolute distance between location and guess
    let diff = (Math.abs(coords.lat - currentGuess.lat) + Math.abs(coords.lng - currentGuess.lng)) / 2;

    //Calculates score, penalty and calls marker draws
    let penalty = diff * 1000, currentScore = 0;
    (penalty > 1000) && (penalty = 1000);
    (penalty > 50) ? drawIncorrectCoords(coords) && (currentScore = 1000 - penalty) : currentScore = 1000;
    drawCorrectCoords(currentGuess);

    //Iterates score and turns accordingly and displays them
    score += currentScore, turn = false;;
    turnsLeft--;
    showScore(currentScore);

    //Finishes game if there are no turns left
    if(turnsLeft < 1) finishGame();
}

//Next guess button
function nextGuess() {
    //Checks validity params
    if(turn) return;
    if(turnsLeft < 1) return;

    //Randomized next city
    let nextCity;
    do { nextCity = Math.floor((Math.random() * Math.floor((cities.length))/3 * difficulty )) }
    while (prevGuesses.includes(nextCity));

    //Sets the next city as a guess and stores it to avoid duplicity
    currentGuess = cities[nextCity];
    prevGuesses.push(nextCity);
    writeCurrentGuess();

    //Resets map, turn and hides scoreboard
    initMap();
    turn = true;
    elems.scoreboard.style.right = "-130px";
}

// GRAPHICS
// update guess menu
function writeCurrentGuess() {
    elems.guess.innerHTML = currentGuess.name;
    elems.population.innerHTML = currentGuess.population.toLocaleString();
    elems.turn.innerHTML = 11 - turnsLeft;
}

// show score menu and update score
function showScore(currentScore) {
    elems.currentscore.innerHTML = currentScore.toFixed(0);
    elems.allscore.innerHTML = score.toFixed(0);
    elems.scoreboard.style.right = "0px";
}

// remove next guess button on game end
function finishGame() {
    document.querySelector('#nextguess').style.display = "none";
}