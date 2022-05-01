import { elements } from "./htmlElements.js";
import Controls from "./controls.js";
import Timer from "./timer.js";
import SoundCards from "./soundCards.js";

const {
  minutesDisplay,
  secondsDisplay,
  playButton,
  pauseButton,
  stopButton,
  addButton,
  subtractButton,
  forestCard,
  forestSound,
  rainCard,
  rainSound,
  coffeShopCard,
  coffeShopSound,
  firePlaceCard,
  firePlaceSound,
  standardMinutes,
  standardSeconds,
  count,
} = elements;

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
