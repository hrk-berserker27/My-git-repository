const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const deadline = document.querySelector(".ending-time");

//temporary DAte
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let randDate = new Date(2022, 1, 26, 11, 0, 0);
const randDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 0, 0);
let randYear = randDate.getFullYear();
let randMonth = randDate.getMonth();
let randDay = randDate.getDay();
let days = randDate.getDate();
let randHrs = randDate.getHours();
let randMin = randDate.getMinutes();

deadline.textContent = `Giveaway ends on ${weekdays[randDay]},
${days} ${months[randMonth]} ${randYear},${randHrs}:0${randMin}am`;
//Conditional can be modified as per the client

//Selecting the span for displaying the time inside another span
const node = document.querySelectorAll(".time-left .no");

//formatting the time before displaying
function format(value) {
  if (value < 10 && value >= 0) {
    return `0${value}`;
  }
  if (value < 0) {
    const cont = document.querySelector(".time-container");
    cont.classList.add("timeOver");
    cont.innerHTML = "Time is over";
    clearInterval(id);
  } else return value;
}
function DisplayTime() {
  let presentDate = new Date().getTime();
  let futureDate = randDate.getTime();

  let rem = futureDate - presentDate;
  let remDays, remHours, remMinutes, remSeconds;
  remDays = Math.floor(rem / (1000 * 60 * 60 * 24));
  remHours = Math.floor((rem / (1000 * 60 * 60)) % 24);
  remMinutes = Math.floor((rem / (1000 * 60)) % 60);
  remSeconds = Math.floor((rem / 1000) % 60);

  const values = [remDays, remHours, remMinutes, remSeconds];
  node.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
}
//Creating a working deadline
const id = setInterval(DisplayTime, 1000);
DisplayTime();
