import loadPage from "./load-page.js";
import loadAboutUs from "./about-us.js";
import loadMenu from "./menu.js";

export default function loadHomePage() {
  const content = document.querySelector("#content");

  content.innerHTML = `
  <nav>
  <ul class="nav-links">
    <li><a class="link" id="home">Home</a></li>
    <li><a class="link" id="about-us">About us</a></li>
    <li><a class="link" id="menu">Menu</a></li>
  </ul>
</nav>

<section class="hero">
  <div class="hero-text">
    <h1 class="hero-title">Vegan Sushi Bar</h1>
    <div class="underline"></div>
    <div class="hero-subtitle">This is how we roll!</div>
    <a class="btn">Order today!</a>
  </div>
</section>

<footer>
  <a href="https://github.com/kazmonroy" target=”_blank”>Made by Kaz <i class="fa-brands fa-github"></i></a>
</footer>
  
  `;

  const homeBtn = document.querySelector("#home");
  const menuBtn = document.querySelector("#menu");
  const aboutUsBtn = document.querySelector("#about-us");
  const orderBtn = document.querySelector(".btn");

  homeBtn.addEventListener("click", loadPage);
  aboutUsBtn.addEventListener("click", loadAboutUs);
  menuBtn.addEventListener("click", loadMenu);
  orderBtn.addEventListener("click", loadMenu);
}
