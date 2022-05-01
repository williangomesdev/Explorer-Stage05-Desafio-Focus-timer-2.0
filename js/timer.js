export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}) {
  let timerTimeOut;

  //Timer Converter elemento em valor numérico
  function displayNumber(display) {
    let number = Number(display.textContent);
    return number;
  }

  //Timer Atualização de valores do timer
  function updateStandardTimeValue(minutesValue, secondsValue) {
    minutesDisplay.textContent = String(minutesValue).padStart(2, "0");
    secondsDisplay.textContent = String(secondsValue).padStart(2, "0");
  }

  //Timer countdown
  function countDownSeconds() {
    timerTimeOut = setTimeout(function () {
      let seconds = displayNumber(secondsDisplay);
      let minutes = displayNumber(minutesDisplay);

      if (minutes == 0 && seconds == 0) {
        resetControls();
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      updateStandardTimeValue(minutes, String(seconds - 1));

      countDownSeconds();
    }, 1000);
  }

  function holdCountdown() {
    clearTimeout(timerTimeOut);
  }

  return {
    updateStandardTimeValue,
    countDownSeconds,
    holdCountdown,
  };
}
