const score = document.querySelector("#score") as HTMLDivElement;
const level = document.querySelector("#level") as HTMLDivElement;
const bgAudio = document.querySelector("#bgAudio") as HTMLAudioElement;
const boardSpeed = document.querySelector("#speed") as HTMLDivElement;
const gameArea = document.querySelector(".gameArea") as HTMLDivElement; 
const hiScoreSet = localStorage.getItem("highScore");
const hiScoreDiv = document.querySelector("#hiScore") as HTMLDivElement;
const scoreBroad = document.querySelector("#scoreBroad") as HTMLDivElement;
const startScreen = document.querySelector(".startScreen") as HTMLDivElement;
const endGameAudio = document.querySelector("#endGameAudio") as HTMLAudioElement;
const hiScoreBroad = document.querySelector("#hiScoreBroad") as HTMLDivElement;

interface CustomDivElement extends HTMLDivElement {
         Y?: number;
    }

let gameKeys: Record<string, boolean> = {
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

interface Player {
    speed: number;
    score: number;
    speedEndPoint: number;
    speedUp: number;
    level: number;
    levelUp: boolean;
    start?: boolean; 
    X?: any;
    Y?: any;
}
  
  const player: Player = {
    speed: 10,
    score: 0,
    speedEndPoint: 18,
    speedUp: 10,
    level: 0,
    X: 0, 
    Y: 0, 
    levelUp: true,
  };

let hiscoreVal: number;


document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
startScreen.addEventListener("click", gameStart);

if (hiScoreSet === null) {
  hiscoreVal = 0;
  localStorage.setItem("highScore", hiscoreVal.toString());
} else {
  hiscoreVal = parseInt(hiScoreSet);
  hiScoreDiv.innerHTML = `high score: ${hiscoreVal}`;
}


function keyDown(e: KeyboardEvent) {
  e.preventDefault();
  gameKeys[e.code] = true;
  // console.log();   
}

function keyUp(e: KeyboardEvent) {
  e.preventDefault();
  gameKeys[e.code] = false;
  // console.log(); 
}

function gameStart() {
  player.start = true;
  bgAudio.src = "public/assets/audio/bg.mp3";
  bgAudio.play();
  bgAudio.loop = true;
  bgAudio.currentTime = 0;
  gameArea.innerHTML = ""; 
  startScreen.classList.add("hideClass");
  window.requestAnimationFrame(gamePlay); 

  
  let playerCar = document.createElement("div");
  playerCar.setAttribute("class", "playerCar");
  gameArea.appendChild(playerCar);

  player.X = playerCar.offsetLeft || 0;
  player.Y = playerCar.offsetTop || 0;

  interface RoadLines extends HTMLDivElement {
    Y: number;
  }
  
  for (let i = 0; i <= 9; i++) {
    let roadLines = document.createElement("div") as RoadLines;
    roadLines.setAttribute("class", "lines");
    roadLines.Y = i * 180;
    roadLines.style.top = roadLines.Y + "px";
    gameArea.appendChild(roadLines);
  }
    
  for (let x = 0; x <= 2; x++) {
    
    let otherCars = document.createElement("div") as HTMLDivElement & { Y: number };
    otherCars.setAttribute("class", "otherCars");
    otherCars.Y = (x + 1) * 250 * -1; 
    gameArea.appendChild(otherCars);
  }
}

function gamePlay() {
  let playerCar = document.querySelector(".playerCar") as HTMLDivElement; 
  let gaPositions = gameArea.getBoundingClientRect(); 
  let pcPositions = playerCar.getBoundingClientRect();

  if (player.start) {
    
    moveLine(); 
    moveOtherCar(pcPositions);

    if (
        (gameKeys.KeyW || gameKeys.ArrowUp) &&
        gaPositions.top < pcPositions.top - 155
      ) {
        player.Y -= player.speed;
      } else if (
        (gameKeys.KeyS || gameKeys.ArrowDown) &&
        gaPositions.bottom > pcPositions.bottom + 20
      ) {
        player.Y += player.speed;
      } else if (
        (gameKeys.KeyA || gameKeys.ArrowLeft) &&
        gaPositions.left < pcPositions.left - 30
      ) {
        player.X -= player.speed;
      } else if (
        (gameKeys.KeyD || gameKeys.ArrowRight) &&
        gaPositions.right > pcPositions.right + 30
      ) {
        player.X += player.speed;
      }
   
    playerCar.style.top = `${player.Y}px`;
    playerCar.style.left = `${player.X}px`;

    window.requestAnimationFrame(gamePlay); 

    
    let currentScore = player.score++;
    score.innerText = "score: " + currentScore;

    
    if (currentScore > hiscoreVal) {
      
      hiscoreVal = currentScore;
      localStorage.setItem("highScore", hiscoreVal.toString());
      hiScoreDiv.innerHTML = `high score: ${hiscoreVal}`;
    }

    if (!player.start) {
      scoreBroad.innerText = `your score: ${currentScore}`;
      hiScoreBroad.innerText = `your high score: ${hiscoreVal}`;
      player.score = 0;
    }

    
    increaseSpeed(currentScore);
  }
}

interface RoadLines extends HTMLDivElement {
    Y: number;
  }

function moveLine() {
    let roadlines = document.querySelectorAll(".lines") as NodeListOf<RoadLines>;
    roadlines.forEach((value) => {
      if (value.Y >= 900) {
        value.Y -= 900;
      }
      value.Y += player.speed; 
      value.style.top = value.Y + "px"; 
    });
  }
  
  
  function moveOtherCar(playerCar: DOMRect) {
    let otherCars = document.querySelectorAll(".otherCars") as NodeListOf<CustomDivElement>;
  
    otherCars.forEach((value) => {
      if (colliding(playerCar, value)) {
        gameOver();
      } else {
        
        if (value.Y === undefined || value.Y >= 900) {
          value.Y = (value.Y ?? 0) - 900;
          
          value.style.left = Math.floor(Math.random() * 99) + 1 + "%";
        }
        value.Y = (value.Y ?? 0) + player.speed;
        value.style.top = value.Y + "px";
      }
    });
  }

function increaseSpeed(speed: number) {
  let count = parseInt(speed.toString().substr(-2));
  if (count == 99) {
    player.speed += 0.005;
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

function colliding(pcPositions: DOMRect, otherCars: HTMLDivElement) {
  let otherCar = otherCars.getBoundingClientRect();

  return !(
    pcPositions.right < otherCar.left ||
    pcPositions.bottom < otherCar.top ||
    pcPositions.top > otherCar.bottom ||
    pcPositions.left > otherCar.right
  );
}

function gameOver() {
  player.start = false;
  player.speed = 10;
  player.level = 0;
  bgAudio.pause();
  endGameAudio.play();
  startScreen.classList.remove("hideClass");
}
