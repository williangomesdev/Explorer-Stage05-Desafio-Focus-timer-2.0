import { elements } from "./htmlElements.js";
import Controls from "./controls.js";
import Timer from "./timer.js";
import SoundCards from "./soundCards.js";
import Events from "./events.js";

const {
  minutesDisplay,
  secondsDisplay,
  playButton,
  pauseButton,
  addButton,
  subtractButton,
  forestCard,
  forestSound,
  rainSound,
  coffeShopSound,
  firePlaceSound,
  standardMinutes,
  standardSeconds,
  count,
} = elements;

const controls = Controls({
  playButton,
  pauseButton,
  addButton,
  subtractButton,
  count,
  minutesDisplay,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

const soundCards = SoundCards({
  forestCard,
  forestSound,
  rainSound,
  coffeShopSound,
  firePlaceSound,
});

Events({ controls, timer, soundCards, standardMinutes, standardSeconds });
