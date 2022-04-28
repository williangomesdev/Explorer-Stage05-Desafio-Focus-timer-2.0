import { playButton, pauseButton } from "./htmlElements.js";

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
