import Controls from "./controls.js";

const minutesDisplay = document.querySelector("#minutes");
const secondsDisplay = document.querySelector("#seconds");
const playButton = document.querySelector("#playButton");
const pauseButton = document.querySelector("#pauseButton");
const stopButton = document.querySelector("#stopButton");
const addButton = document.querySelector("#addButton");
const subtractButton = document.querySelector("#subtractButton");
const forestCard = document.querySelector("#forestCard");
const rainCard = document.querySelector("#rainCard");
const coffeShopCard = document.querySelector("#coffeShopCard");
const firePlaceCard = document.querySelector("#firePlaceCard");
const standardMinutes = 0;
const standardSeconds = 0;
let timerTimeOut;
let count = 0;

const controls = Controls({
  playButton,
  pauseButton,
  addButton,
  subtractButton,
  count,
  minutesDisplay,
  secondsDisplay,
});

//Timer Converter elemento em valor numérico
function displayNumber(display) {
  let number = Number(display.textContent);
  return number;
}

//Timer Atualização de valores do timer
function updateStandardTimeValue(minutesValue, secondsValue) {
  minutesDisplay.textContent = String(minutesValue).padStart(2, "0");
  secondsDisplay.textContent = String(secondsValue).padStart(2, "0");
}

//Timer countdown
function countDownSeconds() {
  timerTimeOut = setTimeout(function () {
    let seconds = displayNumber(secondsDisplay);
    let minutes = displayNumber(minutesDisplay);

    if (minutes == 0 && seconds == 0) {
      controls.reset();
      return;
    }

    if (seconds <= 0) {
      seconds = 60;
      --minutes;
    }

    updateStandardTimeValue(minutes, String(seconds - 1));

    countDownSeconds();
  }, 1000);
}

//Evento botão play/pause
playButton.addEventListener("click", function () {
  controls.play();
  countDownSeconds();
});

pauseButton.addEventListener("click", function () {
  controls.reset();
  clearTimeout(timerTimeOut);
});

stopButton.addEventListener("click", function () {
  controls.stop();
});

addButton.addEventListener("click", function () {
  controls.add();
});

subtractButton.addEventListener("click", function () {
  controls.subtract();
});

//Eventos Cards
forestCard.addEventListener("click", function () {
  controls.forestCardActive();
});

rainCard.addEventListener("click", function () {
  controls.rainCardActive();
});

coffeShopCard.addEventListener("click", function () {
  controls.coffeShopCardActive();
});

firePlaceCard.addEventListener("click", function () {
  controls.firePlaceCardActive();
});
