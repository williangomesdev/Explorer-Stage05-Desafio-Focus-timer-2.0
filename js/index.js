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

//count é usado no contador de minutos
let count = 0;

//Reiniciar os botões de modo padrão aós finalizar o cronometro
function resetControls() {
  playButton.classList.remove("hide");
  pauseButton.classList.add("hide");
  addButton.removeAttribute("disabled");
  subtractButton.removeAttribute("disabled");
}

//atualização dos minutos no minutos no display
function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

//diminui o seconds a cada 1 segundo, função recursiva
//Acada segundo em 0 minuto diminui em 1
function countDownSeconds() {
  setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    /*  secondsDisplay.textContent = "00"; */
    updateTimerDisplay(minutes, 0);

    if (minutes <= 0) {
      resetControls();
      return;
    }

    if (seconds <= 0) {
      seconds = 2;
      --minutes;

      /* minutesDisplay.textContent = String(minutes - 1).padStart(2, "0"); */
      /*  updateTimerDisplay(String(minutes - 1), seconds); */
    }
    /* secondsDisplay.textContent = String(seconds - 1).padStart(2, "0"); */
    updateTimerDisplay(minutes, String(seconds - 1));
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
  playButton.classList.remove("hide");
  pauseButton.classList.add("hide");
  addButton.removeAttribute("disabled");
  subtractButton.removeAttribute("disabled");
});

stopButton.addEventListener("click", function () {
  resetControls();
});

addButton.addEventListener("click", function () {
  if (count <= 90) {
    count = count + 5;
  } else {
    addButton.disable = true;
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
