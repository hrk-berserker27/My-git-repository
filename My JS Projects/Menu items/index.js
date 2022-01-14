const menuItems = [
  {
    id: 1,
    img: "tortilla.jpeg",
    category: "breakfast",
    name: "Tortilla",
    price: "$45",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, molestias! Aliquid, alias ullam eius dicta recusandae neque? Nulla, eligendi harum id, iure animi voluptas inventore, saepe illum tempore non esse voluptate eaque!",
  },
  {
    id: 2,
    img: "baked-ham.jpeg",
    category: "lunch",
    name: "baked ham",
    price: "$34",
    about:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis excepturi eveniet, commodi ut sint vel est quibusdam omnis totam quas necessitatibus, qui aspernatur?",
  },
  {
    id: 3,
    img: "fishdish.jpeg",
    category: "dinner",
    name: "fishdish",
    price: "$23",
    about:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsa quo ullam, nostrum animi, mollitia ducimus quae deleniti ea optio incidunt architecto eum?",
  },
  {
    id: 4,
    img: "metaball.jpeg",
    category: "breakfast",
    name: "meta balls with noodles",
    price: "$78",
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, dolores ipsam delectus quam adipisci, fugit in exercitationem quas nam sint debitis dolor temporibus molestias!",
  },
  {
    id: 5,
    img: "pasta.jpeg",
    category: "lunch",
    name: "pasta",
    price: "$10",
    about:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde inventore quia placeat harum soluta libero.",
  },
  {
    id: 6,
    img: "salad-spice.jpeg",
    category: "dinner",
    name: "Salad",
    price: "$15",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique placeat tempora molestias, fuga odio reprehenderit libero non consectetur nemo mollitia.",
  },
  {
    id: 7,
    img: "sand-which.jpeg",
    category: "breakfast",
    name: "Sand-wich",
    price: "$12",
    about:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, dolorum vitae! Id rem cumque repudiandae blanditiis perspiciatis quis asperiores voluptatem modi.",
  },
  {
    id: 8,
    img: "sausage&egg.jpeg",
    category: "lunch",
    name: "sausage and egg",
    price: "$18",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur suscipit voluptatibus, hic aperiam ipsam mollitia quod itaque quia amet, rem cum!",
  },
];
window.addEventListener("DOMContentLoaded", function () {
  DisplayMenu(menuItems);
});
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const container = document.querySelector(".cards");

function DisplayMenu(menu) {
  let displayMenu = menu.map(function (element) {
    return ` <section class="card"><div class = "food-image">
    <img src =" ${element.img}"/></div>
    <p class="id">
     <span class="food-name">${element.name}</span
    ><span class="price">${element.price}</span>
    </p>
    <p class="More-details">
    ${element.about}
    </p>
    </section>`;
  });
  displayMenu = displayMenu.join("");
  container.innerHTML = displayMenu;
}

btn1.addEventListener("click", (e) => {
  DisplayMenu(menuItems);
});
btn2.addEventListener("click", function (e) {
  const category = e.target.dataset.id;
  const menuCategory = menuItems.filter(function (menuItem) {
    if (menuItem.category === category) {
      console.log(menuItem);
      return menuItem;
    }
  });
  DisplayMenu(menuCategory);
});
btn3.addEventListener("click", function (e) {
  const category = e.target.dataset.id;
  const menuCategory = menuItems.filter(function (menuItem) {
    if (menuItem.category === category) {
      console.log(menuItem);
      return menuItem;
    }
  });
  DisplayMenu(menuCategory);
});
btn4.addEventListener("click", function (e) {
  const category = e.target.dataset.id;
  const menuCategory = menuItems.filter(function (menuItem) {
    if (menuItem.category === category) {
      console.log(menuItem);
      return menuItem;
    }
  });
  DisplayMenu(menuCategory);
});

//This can also display the array in the menu but it returns undefined value.
// menuItems.forEach((element) => {
//   const newNode = document.createElement("section");
//   newNode.innerHTML = ` <div class="food-image"><img src =" ${element.img}"/></div>
//         <p class="id">
//           <span class="food-name">${element.name}</span
//           ><span class="price">${element.price}</span>
//         </p>
//         <p class="More-details">
//           ${element.about}
//         </p>
//         `;
//   container.append(newNode);
//   newNode.classList.add("card");
// });
