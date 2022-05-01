import Controls from "./controls.js";
import Timer from "./timer.js";
import SoundCards from "./soundCards.js";

const minutesDisplay = document.querySelector("#minutes");
const secondsDisplay = document.querySelector("#seconds");
const playButton = document.querySelector("#playButton");
const pauseButton = document.querySelector("#pauseButton");
const stopButton = document.querySelector("#stopButton");
const addButton = document.querySelector("#addButton");
const subtractButton = document.querySelector("#subtractButton");
const forestCard = document.querySelector("#forestCard");
const forestSound = document.querySelector("#forestSound");
const rainCard = document.querySelector("#rainCard");
const rainSound = document.querySelector("#rainSound");
const coffeShopCard = document.querySelector("#coffeShopCard");
const coffeShopSound = document.querySelector("#coffeShopSound");
const firePlaceCard = document.querySelector("#firePlaceCard");
const firePlaceSound = document.querySelector("#firePlaceSound");
const standardMinutes = 0;
const standardSeconds = 0;
let count = 0;

const controls = Controls({
  playButton,
  pauseButton,
  addButton,
  subtractButton,
  count,
  minutesDisplay,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

const soundCards = SoundCards({
  forestCard,
  forestSound,
  rainSound,
  coffeShopSound,
  firePlaceSound,
});

//Evento botão play/pause
playButton.addEventListener("click", function () {
  controls.play();
  timer.countDownSeconds();
});

pauseButton.addEventListener("click", function () {
  controls.reset();
  timer.holdCountdown();
});

stopButton.addEventListener("click", function () {
  controls.stop();
  timer.updateStandardTimeValue(standardMinutes, standardSeconds);
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
  soundCards.forestCardSound();
});

rainCard.addEventListener("click", function () {
  controls.rainCardActive();
  soundCards.rainCardSound();
});

coffeShopCard.addEventListener("click", function () {
  controls.coffeShopCardActive();
  soundCards.coffeShopCardSound();
});

firePlaceCard.addEventListener("click", function () {
  controls.firePlaceCardActive();
  soundCards.firePlaceCardSound();
});
