import { html } from "./htmlElements.js";
import Timer from "./timerSettings.js";
import Controls from "./controlsSettings.js";



//Objeto com as dependências da Factory Timer
//Injetar dependências na factory Timer
const timer = Timer({
  minutesDisplay: html.minutesDisplay,
  secondsDisplay: html.secondsDisplay,
  minutesDisplayValue: html.minutesDisplayValue,
  secondsDisplayValue: html.secondsDisplayValue,
  timerTimeOut: html.timerTimeOut,
});

//Objeto com as dependências da Factory Controls
//Injetar dependências na factory Controls
const controls = Controls({
  count: html.count,
  timer: timer,
  playButton: html.playButton,
  pauseButton: html.pauseButton,
  addButton: html.addButton,
  subtractButton: html.subtractButton,
  forestCard: html.forestCard,
  rainCard: html.rainCard,
  coffeShopCard: html.coffeShopCard,
  firePlaceCard: html.firePlaceCard,
});


//Evento botão play/pause/stop/add/subtract
html.playButton.addEventListener("click", function () {
  controls.play();
  timer.countDownSeconds();
});

html.pauseButton.addEventListener("click", function () {
  controls.pause();
  clearTimeout(html.timerTimeOut);
});

html.stopButton.addEventListener("click", function () {
  controls.reset();
  timer.reset();
});

html.addButton.addEventListener("click", function () {
  controls.addButtonValue();
});

html.subtractButton.addEventListener("click", function () {
  controls.subtractButtonValue();
});

//Eventos Cards
html.forestCard.addEventListener("click", function () {
  controls.forestButtonActive();
});

html.rainCard.addEventListener("click", function () {
  controls.rainButtonActive();
});

html.coffeShopCard.addEventListener("click", function () {
  controls.coffeShopButtonActive();
});

html.firePlaceCard.addEventListener("click", function () {
  controls.firePlaceButtonActive();
});
