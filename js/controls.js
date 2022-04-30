export default function Controls({
  playButton,
  pauseButton,
  addButton,
  subtractButton,
  count,
  minutesDisplay,
}) {
  //Controls resetar controles para o padrão
  function reset() {
    pauseButton.classList.add("hide");
    playButton.classList.remove("hide");
    addButton.removeAttribute("disabled");
    subtractButton.removeAttribute("disabled");
  }

  function play() {
    playButton.classList.add("hide");
    pauseButton.classList.remove("hide");
    addButton.setAttribute("disabled", "disabled");
    subtractButton.setAttribute("disabled", "disabled");
  }
  function stop() {
    reset();
    count = 0;
  }
  function add() {
    if (count <= 90) {
      count = count + 5;
    }

    minutesDisplay.textContent = String(count).padStart(2, "0");
  }
  function subtract() {
    if (count <= 0) {
      subtractButton.disable = true;
    } else if (count >= 5) {
      subtractButton.disable = false;
      count = count - 5;
    }

    minutesDisplay.textContent = String(count).padStart(2, "0");
  }
  function forestCardActive() {
    forestCard.classList.toggle("cardSound");
    forestCard.classList.toggle("activeCard");
    rainCard.classList.remove("activeCard");
    rainCard.classList.add("cardSound");
    coffeShopCard.classList.remove("activeCard");
    coffeShopCard.classList.add("cardSound");
    firePlaceCard.classList.remove("activeCard");
    firePlaceCard.classList.add("cardSound");
  }
  function rainCardActive() {
    rainCard.classList.toggle("cardSound");
    rainCard.classList.toggle("activeCard");
    forestCard.classList.remove("activeCard");
    forestCard.classList.add("cardSound");
    coffeShopCard.classList.remove("activeCard");
    coffeShopCard.classList.add("cardSound");
    firePlaceCard.classList.remove("activeCard");
    firePlaceCard.classList.add("cardSound");
  }
  function coffeShopCardActive() {
    coffeShopCard.classList.toggle("cardSound");
    coffeShopCard.classList.toggle("activeCard");
    forestCard.classList.remove("activeCard");
    forestCard.classList.add("cardSound");
    rainCard.classList.remove("activeCard");
    rainCard.classList.add("cardSound");
    firePlaceCard.classList.remove("activeCard");
    firePlaceCard.classList.add("cardSound");
  }
  function firePlaceCardActive() {
    firePlaceCard.classList.toggle("cardSound");
    firePlaceCard.classList.toggle("activeCard");
    forestCard.classList.remove("activeCard");
    rainCard.classList.remove("activeCard");
    coffeShopCard.classList.remove("activeCard");
    forestCard.classList.add("cardSound");
    rainCard.classList.add("cardSound");
    coffeShopCard.classList.add("cardSound");
  }

  return {
    reset,
    play,
    stop,
    add,
    subtract,
    forestCardActive,
    rainCardActive,
    coffeShopCardActive,
    firePlaceCardActive,
  };
}
