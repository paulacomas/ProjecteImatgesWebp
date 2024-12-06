import "../css/main.css";

function toggleMenu() {
  const sideMenu = document.getElementById("side-menu");
  sideMenu.classList.toggle("translate-x-full");
}

window.toggleMenu = toggleMenu;
