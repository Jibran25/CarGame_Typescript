"use strict";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: V A R I A B L E S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
const score = document.querySelector("#score");
const level = document.querySelector("#level");
const bgAudio = document.querySelector("#bgAudio");
const boardSpeed = document.querySelector("#speed");
const gameArea = document.querySelector(".gameArea"); //! 1st MAIN
const hiScoreSet = localStorage.getItem("highScore");
const hiScoreDiv = document.querySelector("#hiScore");
const scoreBroad = document.querySelector("#scoreBroad");
const startScreen = document.querySelector(".startScreen");
const endGameAudio = document.querySelector("#endGameAudio");
const hiScoreBroad = document.querySelector("#hiScoreBroad");
const player = {
    // DEFAULT VALUES
    speed: 10,
    score: 0,
    speedEndPoint: 18,
    speedUp: 10,
    level: 0,
    levelUp: true,
    start: false,
};
const gameKeys = {
    KeyW: false,
    KeyS: false,
    KeyA: false,
    KeyD: false,
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false,
    Space: false,
};
// ...
function gameStart() {
    // ...
    // ───   CREATING, ADDING CLASS AND INSERT PLAYERCAR DIV.────────────────────────────────────────────────────────────────────────
    const playerCar = document.createElement("div");
    playerCar.setAttribute("class", "playerCar");
    gameArea.appendChild(playerCar);
    // ─── FINDING PLAYERCAR POSITION BY OFFSET ─────────────────────────────────────────────
    player.X = playerCar.offsetLeft || 0;
    player.Y = playerCar.offsetTop || 0;
    // ...
    // ─── CREATING ,ADDING CLASS AND INSERTING ROADLINE DIV    __________________________________________________________________________
    for (let i = 0; i <= 9; i++) {
        const roadLines = document.createElement("div");
        roadLines.setAttribute("class", "lines");
        roadLines.Y = i * 180;
        roadLines.style.top = roadLines.Y + "px";
        gameArea.appendChild(roadLines);
    }
    // ─── CREATING ,ADDING CLASS AND INSERTING OTHERCARS DIV    __________________________________________________________________________
    for (let x = 0; x <= 2; x++) {
        // FOR 3 CARS
        const otherCars = document.createElement("div");
        otherCars.setAttribute("class", "otherCars");
        otherCars.Y = (x + 1) * 250 * -1; // USEING IN MOVEOTHERCAR()
        gameArea.appendChild(otherCars);
    }
}
// ...
// ──────────────────────────────────────────────────── IV───────── ::::::FUNCTION FOR ANIMATION, COLLIDING, RANDOM CARS AND ROADLINES : :  ──────────────────────────────────────────────────────────────
// ─── FOR ROADLINE MOVING ─────────────────────────────────────────
function moveLine() {
    const roadlines = document.querySelectorAll(".lines");
    roadlines.forEach((value) => {
        if (value.Y !== undefined && value.Y >= 900) {
            // REPEATING ROADLINE AT A POINT
            value.Y -= 900;
        }
        if (value.Y !== undefined) {
            value.Y += player.speed; // FOR SPEED OF LINE
            value.style.top = value.Y + "px"; // MAKE DISTANCE IN EACH LINES INTO TOP
        }
    });
}
// ────── FOR OTHERCARS MOVING ────────────────────────────────────────
function moveOtherCar(playerCar) {
    const otherCars = document.querySelectorAll(".otherCars");
    otherCars.forEach((value) => {
        if (value.Y !== undefined) {
            if (colliding(playerCar, value)) {
                gameOver();
            }
            else if (value.Y >= 900) {
                value.Y -= 900;
                //  FOR OTHER CAR REMOVE POSITIONS
                value.style.left = Math.floor(Math.random() * 99) + 1 + "%";
            }
            value.Y += player.speed;
            value.style.top = value.Y + "px";
        }
    });
}
// ...
// Rest of the code remains unchanged
//   This should address the issues related to Y being possibly undefined. If you encounter any further errors or have additional questions, feel free to ask.
// ────── INCREASING SPEED WHEN SCORE DIFFERENT 100 ───────────────────
function increaseSpeed(speed) {
    let count = parseInt(speed.toString().substr(-2));
    if (count == 99) {
        player.speed += 0.5;
    }
    if (player.speed == player.speedEndPoint) {
        player.speed = player.speedUp;
        player.speedUp += 1;
        player.speedEndPoint += 1;
        player.level += 1;
    }
    level.innerText = `Level: ${player.level}`;
    boardSpeed.innerText = `Speed: ${player.speed}`;
}
// ────── FUNCTION FOR FINDING COLLIDING BETWEEN PLAYERCAR AND OTHERCARS
function colliding(pcPositions, otherCars) {
    let otherCar = otherCars.getBoundingClientRect();
    return !(pcPositions.right < otherCar.left ||
        pcPositions.bottom < otherCar.top ||
        pcPositions.top > otherCar.bottom ||
        pcPositions.left > otherCar.right);
}
// ─── ─── WHEN GAME IS OVER ────────────────────────────────────────────────────
function gameOver() {
    player.start = false;
    player.speed = 10;
    player.level = 0;
    bgAudio.pause();
    endGameAudio.play();
    startScreen.classList.remove("hideClass");
}
//# sourceMappingURL=index.js.map