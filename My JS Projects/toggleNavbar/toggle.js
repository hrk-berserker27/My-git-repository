const toggle = document.getElementById("burger");
const navlink = document.querySelector(".list");
const social = document.querySelector(".social-media");

toggle.addEventListener("click", function () {
  //   console.log(navlink.classList.contains("link"));
  //   if (
  //     navlink.classList.contains("link") &&
  //     social.classList.contains("social")
  //   ) {
  //     navlink.classList.remove("link");
  //     social.classList.remove("social");
  //   } else {
  //     navlink.classList.add("link");
  //     social.classList.add("social");
  //   }
  navlink.classList.toggle("link");
  social.classList.toggle("social");
});
