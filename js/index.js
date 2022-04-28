import {
  playButton,
  pauseButton,
  forestCard,
  rainCard,
  coffeShopCard,
  firePlaceCard,
} from "./htmlElements.js";

//Evento botão play
playButton.addEventListener("click", function () {
  console.log("cliquei no play");
  playButton.classList.add("hide");
  pauseButton.classList.remove("hide");
});

pauseButton.addEventListener("click", function () {
  console.log("cliquei no pause");
  pauseButton.classList.add("hide");
  playButton.classList.remove("hide");
});

//Eventos Cards
forestCard.addEventListener("click", function () {
  forestCard.classList.toggle("cardSound");
  forestCard.classList.toggle("activeCard");
  rainCard.classList.remove("activeCard");
  coffeShopCard.classList.remove("activeCard");
  firePlaceCard.classList.remove("activeCard");
});

rainCard.addEventListener("click", function () {
  rainCard.classList.toggle("cardSound");
  rainCard.classList.toggle("activeCard");
  forestCard.classList.remove("activeCard");
  coffeShopCard.classList.remove("activeCard");
  firePlaceCard.classList.remove("activeCard");
});

coffeShopCard.addEventListener("click", function () {
  coffeShopCard.classList.toggle("cardSound");
  coffeShopCard.classList.toggle("activeCard");
  forestCard.classList.remove("activeCard");
  rainCard.classList.remove("activeCard");
  firePlaceCard.classList.remove("activeCard");
});

firePlaceCard.addEventListener("click", function () {
  firePlaceCard.classList.toggle("cardSound");
  firePlaceCard.classList.toggle("activeCard");
  forestCard.classList.remove("activeCard");
  rainCard.classList.remove("activeCard");
  coffeShopCard.classList.remove("activeCard");
});
