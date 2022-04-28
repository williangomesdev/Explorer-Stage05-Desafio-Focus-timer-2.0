import {
  minutesDisplay,
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
} from "./htmlElements.js";

let count = 0;

//Evento botão play/pause
playButton.addEventListener("click", function () {
  playButton.classList.add("hide");
  pauseButton.classList.remove("hide");
});

pauseButton.addEventListener("click", function () {
  pauseButton.classList.add("hide");
  playButton.classList.remove("hide");
});

stopButton.addEventListener("click", function () {
  pauseButton.classList.add("hide");
  playButton.classList.remove("hide");
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
