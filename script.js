let $India_score = document.getElementById("score-India");
let $Pakistan_score = document.getElementById("score-Pakistan");
let $India_wickets = document.getElementById("wickets-India");
let $Pakistan_wickets = document.getElementById("wickets-Pakistan");
let $India_Balls = document.querySelectorAll("#India-superover > .ball");
let $Pakistan_Balls = document.querySelectorAll("#Pakistan-superover > .ball");

let possibleOutcomes = [0, 1, 2, 3, 4, 6, "W"];
let turn = 1;
let India_score = 0;
let Pakistan_score = 0;
let India_wickets = 0;
let Pakistan_wickets = 0;
let ballFacedByIndia = 0;
let ballFacedByPakistan = 0;

let strikeAudio = new Audio("http://bit.ly/so-ball-hit");
let gameoverAudio = new Audio("http://bit.ly/so-crowd-cheer");

function play() { 
    strikeAudio.play();

    let randomOutcome = Math.floor(Math.random() * possibleOutcomes.length);
    let outcome = possibleOutcomes[randomOutcome];
    if (turn == 1) {
        ballFacedByIndia++;
        if (outcome == "W") {
            India_wickets++;
            $India_wickets.textContent = India_wickets;
            $India_Balls[ballFacedByIndia - 1].textContent=outcome;

        } else {
            India_score += outcome;
            $India_score.textContent = India_score;
            $India_Balls[ballFacedByIndia - 1].textContent=outcome;
        }
        if (ballFacedByIndia == 6 || India_wickets == 2) {
            turn = 2;
        }
    } 
    else if (turn == 2) {
        ballFacedByPakistan++;
        if (outcome == "W") {
            Pakistan_wickets++;
            $Pakistan_wickets.textContent = Pakistan_wickets;
            $Pakistan_Balls[ballFacedByPakistan - 1].textContent=outcome;

        } else {
            Pakistan_score += outcome;
            $Pakistan_score.textContent = Pakistan_score;
            $Pakistan_Balls[ballFacedByPakistan - 1].textContent=outcome;
        }
        if (ballFacedByPakistan == 6 || Pakistan_wickets == 2 || Pakistan_score > India_score) {
            gameOver();
        }
    }
}

function gameOver() {
    gameoverAudio.play();
        if (India_score > Pakistan_score) {
            alert("India Wins..!!!");
        } else if (India_score < Pakistan_score) {
            alert("PAK Wins..!!!");
        } else {
            alert("DRAW! It is the next superover");
        }
}

function reset() {
    window.location.reload();
}