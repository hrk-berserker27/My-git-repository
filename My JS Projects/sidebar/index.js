const sidebar = document.querySelector(".sidebar");
// console.log(sidebar.classList.contains("toggle"));
const button = document.querySelector(".cross");
// console.log(button);
const hamburger = document.querySelector(".ham");
button.addEventListener("click", function () {
  if (sidebar.classList.contains("toggle")) {
    sidebar.classList.remove("toggle");
  } else {
    sidebar.classList.add("toggle");
  }
});
hamburger.addEventListener("click", function () {
  sidebar.classList.toggle("toggle");
});
