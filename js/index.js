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
let timerTimeOut;
let count = 0;

//Converter elemento em valor numérico
function displayNumber(display) {
  let number = Number(display.textContent);
  return number;
}

//Timer countdown
function countDownSeconds() {
  timerTimeOut = setTimeout(function () {
    let seconds = displayNumber(secondsDisplay);
    if (seconds <= 0) {
      seconds = 60;
    }

    secondsDisplay.textContent = seconds - 1;

    countDownSeconds();
  }, 1000);
}

//Evento botão play/pause
playButton.addEventListener("click", function () {
  playButton.classList.add("hide");
  pauseButton.classList.remove("hide");
  addButton.setAttribute("disabled", "disabled");
  subtractButton.setAttribute("disabled", "disabled");
  countDownSeconds();
});

pauseButton.addEventListener("click", function () {
  pauseButton.classList.add("hide");
  playButton.classList.remove("hide");
  addButton.removeAttribute("disabled");
  subtractButton.removeAttribute("disabled");
  clearTimeout(timerTimeOut);
});

stopButton.addEventListener("click", function () {
  pauseButton.classList.add("hide");
  playButton.classList.remove("hide");
  addButton.removeAttribute("disabled");
  subtractButton.removeAttribute("disabled");
});

addButton.addEventListener("click", function () {
  if (count <= 90) {
    count = count + 5;
  }

  minutesDisplay.textContent = String(count).padStart(2, "0");
});

subtractButton.addEventListener("click", function () {
  if (count <= 0) {
    subtractButton.disable = true;
  } else if (count >= 5) {
    subtractButton.disable = false;
    count = count - 5;
  }

  minutesDisplay.textContent = String(count).padStart(2, "0");
});

//Eventos Cards
forestCard.addEventListener("click", function () {
  forestCard.classList.toggle("cardSound");
  forestCard.classList.toggle("activeCard");
  rainCard.classList.remove("activeCard");
  rainCard.classList.add("cardSound");
  coffeShopCard.classList.remove("activeCard");
  coffeShopCard.classList.add("cardSound");
  firePlaceCard.classList.remove("activeCard");
  firePlaceCard.classList.add("cardSound");
});

rainCard.addEventListener("click", function () {
  rainCard.classList.toggle("cardSound");
  rainCard.classList.toggle("activeCard");
  forestCard.classList.remove("activeCard");
  forestCard.classList.add("cardSound");
  coffeShopCard.classList.remove("activeCard");
  coffeShopCard.classList.add("cardSound");
  firePlaceCard.classList.remove("activeCard");
  firePlaceCard.classList.add("cardSound");
});

coffeShopCard.addEventListener("click", function () {
  coffeShopCard.classList.toggle("cardSound");
  coffeShopCard.classList.toggle("activeCard");
  forestCard.classList.remove("activeCard");
  forestCard.classList.add("cardSound");
  rainCard.classList.remove("activeCard");
  rainCard.classList.add("cardSound");
  firePlaceCard.classList.remove("activeCard");
  firePlaceCard.classList.add("cardSound");
});

firePlaceCard.addEventListener("click", function () {
  firePlaceCard.classList.toggle("cardSound");
  firePlaceCard.classList.toggle("activeCard");
  forestCard.classList.remove("activeCard");
  rainCard.classList.remove("activeCard");
  coffeShopCard.classList.remove("activeCard");
  forestCard.classList.add("cardSound");
  rainCard.classList.add("cardSound");
  coffeShopCard.classList.add("cardSound");
});
