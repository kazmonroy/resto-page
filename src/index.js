import "./style.css";
import loadPage from "./load-page.js";
import loadAboutUs from "./about-us.js";
import loadMenu from "./menu.js";

init();

function init() {
  loadPage();
  navigate();
}

function navigate() {
  const homeBtn = document.querySelector("#home");
  const menuBtn = document.querySelector("#menu");
  const aboutUsBtn = document.querySelector("#about-us");

  aboutUsBtn.addEventListener("click", loadAboutUs);
  menuBtn.addEventListener("click", loadMenu);
}
