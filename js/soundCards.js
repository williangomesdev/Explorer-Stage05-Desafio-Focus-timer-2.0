export default function SoundCards({
  forestCard,
  forestSound,
  rainSound,
  coffeShopSound,
  firePlaceSound,
}) {
  function forestCardSound() {
    if (forestCard.classList.contains("activeCard")) {
      forestSound.play();
      rainSound.pause();
      coffeShopSound.pause();
      firePlaceSound.pause();
    } else {
      forestSound.pause();
    }
  }
  function rainCardSound() {
    if (rainCard.classList.contains("activeCard")) {
      forestSound.pause();
      rainSound.play();
      coffeShopSound.pause();
      firePlaceSound.pause();
    } else {
      rainSound.pause();
    }
  }
  function coffeShopCardSound() {
    if (coffeShopCard.classList.contains("activeCard")) {
      forestSound.pause();
      rainSound.pause();
      coffeShopSound.play();
      firePlaceSound.pause();
    } else {
      coffeShopSound.pause();
    }
  }
  function firePlaceCardSound() {
    if (firePlaceCard.classList.contains("activeCard")) {
      forestSound.pause();
      rainSound.pause();
      coffeShopSound.pause();
      firePlaceSound.play();
    } else {
      firePlaceSound.pause();
    }
  }

  return {
    forestCardSound,
    rainCardSound,
    coffeShopCardSound,
    firePlaceCardSound,
  };
}
