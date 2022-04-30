export default function Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
}) {
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

  return {
    displayNumber,
    updateStandardTimeValue,
  };
}
