
export default function Controls({
  count,
  timer,
  playButton,
  pauseButton,
  addButton,
  subtractButton,
  forestCard,
  rainCard,
  coffeShopCard,
  firePlaceCard,
}) {
  function play() {
    playButton.classList.add("hide");
    pauseButton.classList.remove("hide");
    addButton.setAttribute("disabled", "disabled");
    subtractButton.setAttribute("disabled", "disabled");
  }

  function pause() {
    playButton.classList.remove("hide");
    pauseButton.classList.add("hide");
    addButton.removeAttribute("disabled");
    subtractButton.removeAttribute("disabled");
  }
  function reset() {
    playButton.classList.remove("hide");
    pauseButton.classList.add("hide");
    addButton.removeAttribute("disabled");
    subtractButton.removeAttribute("disabled");
  }

  function addButtonValue() {
    if (count <= 90) {
      count = count + 5;
    } else {
      addButton.disable = true;
    }

    timer.addDisplayNumber(count);
  }

  function subtractButtonValue() {
    if (count <= 0) {
      subtractButton.disable = true;
    } else if (count >= 5) {
      subtractButton.disable = false;
      count = count - 5;
    }

    timer.addDisplayNumber(count);
  }

  function forestButtonActive() {
    forestCard.classList.toggle("cardSound");
    forestCard.classList.toggle("activeCard");
    rainCard.classList.remove("activeCard");
    rainCard.classList.add("cardSound");
    coffeShopCard.classList.remove("activeCard");
    coffeShopCard.classList.add("cardSound");
    firePlaceCard.classList.remove("activeCard");
    firePlaceCard.classList.add("cardSound");
  }
  function rainButtonActive() {
    rainCard.classList.toggle("cardSound");
    rainCard.classList.toggle("activeCard");
    forestCard.classList.remove("activeCard");
    forestCard.classList.add("cardSound");
    coffeShopCard.classList.remove("activeCard");
    coffeShopCard.classList.add("cardSound");
    firePlaceCard.classList.remove("activeCard");
    firePlaceCard.classList.add("cardSound");
  }
  function coffeShopButtonActive() {
    coffeShopCard.classList.toggle("cardSound");
    coffeShopCard.classList.toggle("activeCard");
    forestCard.classList.remove("activeCard");
    forestCard.classList.add("cardSound");
    rainCard.classList.remove("activeCard");
    rainCard.classList.add("cardSound");
    firePlaceCard.classList.remove("activeCard");
    firePlaceCard.classList.add("cardSound");
  }
  function firePlaceButtonActive() {
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
    play,
    pause,
    reset,
    addButtonValue,
    subtractButtonValue,
    forestButtonActive,
    rainButtonActive,
    coffeShopButtonActive,
    firePlaceButtonActive,
  };
}
