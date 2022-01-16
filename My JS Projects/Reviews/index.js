const reviewee = [
  {
    id: 1,
    img: "img1.jpeg",
    name: "Grey Romanoff",
    job: "Graphic designer",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi atque totam deleniti quos, sunt accusantium?",
  },
  {
    id: 2,
    img: "img2.jpeg",
    name: "Lisa Romanoff",
    job: "Web developer",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi atque totam deleniti quos, sunt accusantium?",
  },
  {
    id: 3,
    img: "img3.jpeg",
    name: "Grisha Romanoff",
    job: "Software developer",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi atque totam deleniti quos, sunt accusantium?",
  },
  {
    id: 4,
    img: "img4.jpeg",
    name: "Randi Romanoff",
    job: "UI/UX expert",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi atque totam deleniti quos, sunt accusantium?",
  },
];
let person = 0;
const image = document.body.querySelector(".image");
const revname = document.body.querySelector(".name");
const revjob = document.body.querySelector(".job");
const review = document.body.querySelector(".Reviews");

const buttonleft = document.body.querySelector(".left");
const buttonright = document.body.querySelector(".right");
// console.log(image);
window.addEventListener("DOMContentLoaded", Display(person));

buttonleft.addEventListener("click", () => {
  person--;
  if (person <= 0) {
    person = reviewee.length - 1;
  }
  Display(person);
});
buttonright.addEventListener("click", () => {
  person++;
  if (person === reviewee.length - 1) {
    person = 0;
  }
  Display(person);
});
function Display(person) {
  image.setAttribute("src", reviewee[person].img);
  revname.textContent = reviewee[person].name;
  revjob.textContent = reviewee[person].job;
  review.textContent = reviewee[person].content;
}
