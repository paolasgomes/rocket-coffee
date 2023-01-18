const buttonMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-mobile");

const handleMenu = (e) => {
  menu.classList.toggle("active");
};

buttonMenu.addEventListener("click", handleMenu);
