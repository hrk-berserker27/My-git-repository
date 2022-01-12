const question = document.querySelectorAll(".question-container");

question.forEach(function (ques) {
  const btn = ques.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    question.forEach(function (item) {
      if (item !== ques) {
        item.classList.remove("show-text");
      }
    });
    ques.classList.toggle("show-text");
  });
});
