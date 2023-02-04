let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultAreaImg = document.querySelector(".main-img");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chancesArea = document.getElementById("chances-area");
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function(){userInput.value=""});

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

function play() {
  let userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1~100사이 숫자를 입력하세요.";
    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력하세요.";
    return;
  }

  chances--;
  chancesArea.textContent = `남은 기회: ${chances}`;
  history.push(userValue);

  if (userValue < computerNum) {
    resultAreaImg.src = "https://media.tenor.com/wt2Q3FlD_vsAAAAi/pusheen-thumbs-up.gif";
    resultArea.textContent = "UP!!";
  } else if (userValue > computerNum) {
      resultAreaImg.src = "https://media.tenor.com/l4Fn1CJf5cUAAAAi/worse-thumbs-down.gif";
      resultArea.textContent = "DOWN!!";
  } else {
      resultAreaImg.src = "https://media.tenor.com/bjdppfas5z4AAAAi/party-party-time.gif";
      resultArea.textContent = "정답!!";
      gameOver = true;
  }

  if (chances < 1) {
    gameOver = true;
    resultAreaImg.src = "https://media.tenor.com/pkwelOVbT3EAAAAi/cat-drink.gif";
    resultArea.textContent = "실패!! 마셔라!!";
  }
  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function reset() {
  userInput.value = "";
  pickRandomNum();
  resultAreaImg.src = "https://media.tenor.com/RFiiFc0euiUAAAAi/lets-go-outside-cheers.gif";
  resultArea.textContent = "술 게임을 시작합니다.";
  chances = 5;
  chancesArea.textContent = `남은 기회: ${chances}`;
  history = [];
  gameOver = false;
  playButton.disabled = false;
}

pickRandomNum();