//taking the snake and its food in the constants
const snake = document.querySelector(".snake");
const snakeFood = document.querySelector(".snakeFood");
const gamebox = document.querySelector(".gamebox");
const scorecard = document.querySelector(".score");
//movement keys
const upKey = document.querySelector(".btn1");
const leftKey = document.querySelector(".btn2");
const rightKey = document.querySelector(".btn3");
const downKey = document.querySelector(".btn4");
const reset = document.querySelector(".btn");
const direct = document.querySelector(".directionBtn");

//counting the overlapping
let counter = 0;
//adding events on each key
//function for movement
//generating the random position of the snakeFood

function randomPositionGenerator() {
  const max = 5;
  const min = 35;
  const randomPosition = Math.floor(Math.random() * (max - min + 1)) + min;
  snakeFood.style.setProperty("--top", `${randomPosition}vh`);
  snakeFood.style.setProperty("--left", `${randomPosition}vh`);
}
//movement function for controlling the motion of the snake
let positionInX = 1;
let positionInY = 1;
function movement() {
  snake.style.setProperty("--moveX", `${positionInX}px`);
  snake.style.setProperty("--moveY", `${positionInY}px`);
  snake.style.setProperty("--positionX", `${positionInX}px`);
  snake.style.setProperty("--positionY", `${positionInY}px`);
}

randomPositionGenerator();
//checking if the snake has touched the food or not
function overlap(e1, e2) {
  const domRect1 = e1.getBoundingClientRect();
  const domRect2 = e2.getBoundingClientRect();
  return !(
    domRect1.top > domRect2.bottom ||
    domRect1.right < domRect2.left ||
    domRect1.bottom < domRect2.top ||
    domRect1.left > domRect2.right
  );
}
upKey.addEventListener("click", () => {
  //moving the snake
  positionInY -= 5;
  movement();
  if (overlap(snake, snakeFood) == true) {
    randomPositionGenerator();
    counter++;
    scorecard.textContent = counter;
  }
});

leftKey.addEventListener("click", function () {
  positionInX -= 5;
  movement();
  if (overlap(snake, snakeFood)) {
    randomPositionGenerator();
    counter++;
    scorecard.textContent = counter;
  }
});

rightKey.addEventListener("click", function () {
  positionInX += 5;
  movement();
  if (overlap(snake, snakeFood)) {
    randomPositionGenerator();
    counter++;
    scorecard.textContent = counter;
  }
});

downKey.addEventListener("click", function () {
  positionInY += 5;
  movement();
  if (overlap(snake, snakeFood)) {
    randomPositionGenerator();
    counter++;
    scorecard.textContent = counter;
  }
});

//refreshing the page
/*Use onClick with window.location.reload(), i.e. :

<button onClick="window.location.reload();">Refresh Page</button>
Or history.go(0), i.e.:

<button onClick="history.go(0);">Refresh Page</button>
Or window.location.href=window.location.href for 'full' reload, i.e.:

<button onClick="window.location.href=window.location.href">Refresh Page</button>*/
reset.addEventListener("click", function () {
  history.go(0);
});

// const newLocal = window
//   .getComputedStyle(snakeFood, null)
//   .getPropertyValue("top");
// const newLocal2 = window.getComputedStyle(snake, null).getPropertyValue("top");
//writing logic for each time the snake touches the food
/*To get css property value with JavaScript you can use the getComputedStyle() method. It returns an object with the final used values of all the CSS properties of an element.

Syntax:
var style = window.getComputedStyle(elm, pseudoElt).propertyName;
- elm - The Element for which to get the computed style.
- pseudoElt - A string specifying the pseudo-element to match. Must be ommited (or null) for regular elements (The second argument, pseudoElt, is not supported in Internet Explorer and Opera browsers).
- propertyName - is the css property, in camelCase (e.g.: width, backgroundColor, fontSize, etc.).
*/
