//The offsetTop property returns the top position (in pixels) relative to the top of the offsetParent element.
//The returned value includes:
//the top position, and margin of the element
//the top padding, scrollbar and border of the offsetParent element

const toggle = document.querySelector(".toggle");
const links = document.querySelector(".links-container");
const linklist = document.querySelector(".links");

//setting the height of links dynamically;
toggle.addEventListener("click", () => {
  const heightoflinkcontainer = links.getBoundingClientRect().height;
  const heightoflist = linklist.getBoundingClientRect().height;
  if (heightoflinkcontainer === 0) {
    links.style.height = `${heightoflist}px`; //adds inline css
  } else {
    links.style.height = 0;
  }
});
//adding fixed nav
const navbar = document.getElementById("nav");
const toplink = document.querySelector(".top-link");
const navHeight = navbar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (scrollHeight > 500) {
    toplink.classList.add("show-link");
  } else {
    toplink.classList.remove("show-link");
  }
});
//smooth scroll
const scrolllink = document.querySelectorAll(".scroll-link"); //returns a nodelist
scrolllink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    //Navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    //Finding height of navbar
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 49) {
      position = position + links;
    }
    window.scrollTo({
      left: 0, //coordinates
      top: position,
    });
    links.style.height = 0;
  });
  //Other way
  //[...scrolllink].forEach(function(ele){....})ES6 spread operator
});
