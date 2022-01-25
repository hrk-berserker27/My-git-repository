const buttons = document.querySelectorAll(".tab-btn");
const parent = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

//Event bubbling
parent.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    //hide all other articles
    articles.forEach((a) => {
      a.classList.remove("appear");
    });
    const element = document.getElementById(id);
    element.classList.add("appear");
  }
});
