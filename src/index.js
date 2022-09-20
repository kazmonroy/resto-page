import "./style.css";
import loadPage from "./load-page.js";
import aboutUsPage from "./about-us.js";

const content = document.querySelector("#content");

function init() {
  loadPage();
}

init();

const homeBtn = document.querySelector("#home");
const aboutUsBtn = document.querySelector("#about-us");
const menuBtn = document.querySelector("#menu");

function navigate() {
  aboutUsBtn.addEventListener("click", aboutUsPage);
}
