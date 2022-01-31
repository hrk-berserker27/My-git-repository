const form = document.querySelector(".form");
const input = document.querySelector(".input");
const section = document.querySelector(".list");
const clear = document.querySelector(".clear");
const submit = document.querySelector(".btn");
const alert = document.querySelector(".alert-box");

//edit option
let editElement;
let editFlag = false;
let editId = "";

//using the submit event to add lists in the item and then deleting the item
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const value = input.value;
  const id = new Date().getTime().toString();

  if (value !== "" && editFlag === false) {
    createListItem(id, value);
    //display alert
    displayAlert("Successfully added item", "success");
    //show-container
    section.classList.add("show-container");
    clear.classList.add("show-container");
    //add to local Storage
    addToLocalStorage(id, value);

    //setting back to default
    setBackToDefault();
  } else if (value !== "" && editFlag === true) {
    editElement.innerHTML = value;
    displayAlert("Item editted", "success");
    //edit local storage
    editLocalStorage(editId, value);
    setBackToDefault();
  } else {
    displayAlert("please enter value", "danger");
  }
});
//display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`${action}`);
  //remove Alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`${action}`);
  }, 1000);
}

clear.addEventListener("click", clearItems);
window.addEventListener("DOMContentLoaded", setUpItem);

function clearItems() {
  const items = document.querySelectorAll("add-list"); //selecting every added list item
  if (items.length > 0) {
    items.forEach(function (lis) {
      section.removeChild(lis);
    });
  }
  section.classList.remove("show-container");
  clear.classList.remove("show-container");
  displayAlert("empty list", "danger");
  setBackToDefault();
  //removing from the local storage
  localStorage.removeItem("list");
}

function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement.parentElement;
  const id = element.dataset.id;
  section.removeChild(element);
  if (section.children.length === 0) {
    section.classList.remove("show-contaienr");
    clear.classList.remove("show-container");
  }
  displayAlert("item removed", "danger");
  setBackToDefault();
  //remove from local storage
  removeFromLocalStorage(id);
}

function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement.parentElement;
  //set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  //set form value
  input.value = editElement.innerHTML;
  editFlag = true;
  editId = element.dataset.id;
  submit.value = "Edit";
}
//Set back to default
function setBackToDefault() {
  input.value = "";
  editFlag = false;
  editId = "";
  submit.value = "Submit";
}
//Local Storage

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

function addToLocalStorage(id, value) {
  const grocery = { id, value }; //shortcut of ES6

  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}
function removeFromLocalStorage(id) {
  let items = getLocalStorage();

  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}
function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function setUpItem() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach(function (item) {
      createListItem(item.id, item.value);
    });
    section.classList.add("show-container");
    clear.classList.add("show-container");
  }
}
function createListItem(id, value) {
  const article = document.createElement("section");
  article.setAttribute("class", "add-list");
  article.setAttribute("data-id", `${id}`);
  article.innerHTML = `  <p class="item">
          <span class="item-title">${value}</span>
          <button type="button">
            <img class="edit" src="img1.png" alt="tick" />
          </button>
          <button type="button">
            <img class="delete" src="img2.png" alt="del" />
          </button>
        </p>`;
  section.append(article); //appending

  //deleting option with each listed item
  const del = document.querySelector(".delete");
  del.addEventListener("click", deleteItem);

  //editing option with each listed item
  const edi = document.querySelector(".edit");
  edi.addEventListener("click", editItem);
}
//local Storage API
//setItem
//getItem
//removeItem
//save as Strings
// localStorage.setItem("orange", JSON.stringify(["item", "item2"]));
// const oranges = JSON.parse(localStorage.getItem("orange"));
// console.log(oranges);
// localStorage.removeItem("orange");

//***Setup Items *****
