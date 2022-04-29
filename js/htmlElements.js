const minutesDisplay = document.querySelector("#minutes");
const secondsDisplay = document.querySelector("#seconds");
const minutesDisplayValue = Number(minutesDisplay.textContent);
const secondsDisplayValue = Number(secondsDisplay.textContent);
const playButton = document.querySelector("#playButton");
const pauseButton = document.querySelector("#pauseButton");
const stopButton = document.querySelector("#stopButton");
const addButton = document.querySelector("#addButton");
const subtractButton = document.querySelector("#subtractButton");
const forestCard = document.querySelector("#forestCard");
const rainCard = document.querySelector("#rainCard");
const coffeShopCard = document.querySelector("#coffeShopCard");
const firePlaceCard = document.querySelector("#firePlaceCard");
//count é usado no contador de minutos
let count = 0;

//variável para armazenar o setTimeOut
let timerTimeOut = true;

export const html = {
  minutesDisplay,
  minutesDisplayValue,
  secondsDisplayValue,
  secondsDisplay,
  playButton,
  pauseButton,
  stopButton,
  addButton,
  subtractButton,
  forestCard,
  rainCard,
  coffeShopCard,
  firePlaceCard,
  count,
  timerTimeOut,
};
