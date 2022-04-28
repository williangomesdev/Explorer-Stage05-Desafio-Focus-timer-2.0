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
