//Factory TimerSettings

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  minutesDisplayValue,
  secondsDisplayValue,
  resetControls,
  timerTimeOut,
}) {
  //atualização dos minutos no minutos no display
  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  //Adicionar números no display
  function addDisplayNumber(count) {
    minutesDisplay.textContent = String(count).padStart(2, "0");
  }

  //Reiniciar o relógio
  function reset() {
    updateTimerDisplay(minutesDisplayValue, secondsDisplayValue);
    clearTimeout(timerTimeOut);
  }

  //diminui o seconds a cada 1 segundo, função recursiva
  //A cada segundo em 0 minuto diminui em 1
  function countDownSeconds() {
    timerTimeOut = setTimeout(function () {
      let seconds = secondsDisplay.textContent;
      let minutes = minutesDisplay.textContent;

      updateTimerDisplay(minutes, 0);

      if (minutes <= 0) {
        reset();
        return;
      }
      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      updateTimerDisplay(minutes, String(seconds - 1));
      countDownSeconds();
    }, 1000);
  }

  return {
    addDisplayNumber,
    reset,
    countDownSeconds,
  };
}
