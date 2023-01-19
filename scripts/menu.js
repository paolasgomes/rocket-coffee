const buttonMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-mobile");
const imageMenu = document.querySelector(".menu-toggle img");

const handleMenu = (e) => {
  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    imageMenu.src = "../assets/menu-buguer-close.svg";
  } else {
    imageMenu.src = "../assets/menu-buguer-open.svg";
  }
};

buttonMenu.addEventListener("click", handleMenu);
