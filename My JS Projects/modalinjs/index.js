const button = document.querySelector(".btn-modal");
const cross = document.querySelector(".btn");

button.addEventListener("click", function () {
  document.getElementById("modal-overlay").style.visibility = "hidden";
  //   document.getElementById("modal-overlay").style.pointerEvents = "none";
  document.getElementById("modal").style.transform = "scale(1.2)";
  document.getElementById("modal-container").style.background =
    "hsl(225, 100%, 10%)";
  document.getElementById("modal").style.visibility = "visible";
});

cross.addEventListener("click", function () {
  document.getElementById("modal").style.visibility = "hidden";
  //   document.getElementById("modal-overlay").style.pointerEvents = "auto";
  document.getElementById("modal-container").style.background =
    "linear-gradient(to right bottom, rgb(242, 241, 243), rgb(161, 159, 161))";
  document.getElementById("modal-overlay").style.visibility = "visible";
});
