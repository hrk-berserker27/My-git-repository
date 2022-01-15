const swt = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const pregif = document.querySelector(".preloader");

window.addEventListener("load", () => {
  pregif.classList.add("hide");
});
swt.addEventListener("click", () => {
  if (!swt.classList.contains("switchBtnPlay")) {
    swt.classList.add("switchBtnPlay");
    video.pause();
  } else {
    swt.classList.remove("switchBtnPlay");
    video.play();
  }
});
