export default function ({
  controls,
  timer,
  soundCards,
  standardMinutes,
  standardSeconds,
}) {
  //Evento botão play/pause
  playButton.addEventListener("click", function () {
    controls.play();
    timer.countDownSeconds();
  });

  pauseButton.addEventListener("click", function () {
    controls.reset();
    timer.holdCountdown();
  });

  stopButton.addEventListener("click", function () {
    controls.stop();
    timer.updateStandardTimeValue(standardMinutes, standardSeconds);
  });

  addButton.addEventListener("click", function () {
    controls.add();
  });

  subtractButton.addEventListener("click", function () {
    controls.subtract();
  });

  //Eventos Cards
  forestCard.addEventListener("click", function () {
    controls.forestCardActive();
    soundCards.forestCardSound();
  });

  rainCard.addEventListener("click", function () {
    controls.rainCardActive();
    soundCards.rainCardSound();
  });

  coffeShopCard.addEventListener("click", function () {
    controls.coffeShopCardActive();
    soundCards.coffeShopCardSound();
  });

  firePlaceCard.addEventListener("click", function () {
    controls.firePlaceCardActive();
    soundCards.firePlaceCardSound();
  });
}
