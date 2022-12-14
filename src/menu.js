import loadHomePage from "./load-page.js";
import loadAboutUs from "./about-us.js";
import loadMenu from "./menu.js";

export default function loadMenuPage() {
  content.innerHTML = `
  <nav>
  <ul class="nav-links">
    <li><a class="link" id="home">Home</a></li>
    <li><a class="link" id="about-us">About us</a></li>
    <li><a class="link" id="menu">Menu</a></li>
  </ul>
</nav>

  <section class="menu-section">
    <h1>Menu</h1>
    <div class="menu">
      <div class="dish">
        <img src="../src/img/pexels-ivan-samkov-8951556.jpg" alt="" />
        <div class="dish-name">
          <h2>California Roll</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Beatae!
          </p>
        </div>
      </div>
      <div class="dish">
        <img src="../src/img/pexels-ivan-samkov-8951556.jpg" alt="" />
        <div class="dish-name">
          <h2>California Roll</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Beatae!
          </p>
        </div>
      </div>
      <div class="dish">
        <img src="../src/img/pexels-ivan-samkov-8951556.jpg" alt="" />
        <div class="dish-name">
          <h2>California Roll</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Beatae!
          </p>
        </div>
      </div>
      <div class="dish">
        <img src="../src/img/pexels-ivan-samkov-8951556.jpg" alt="" />
        <div class="dish-name">
          <h2>California Roll</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Beatae!
          </p>
        </div>
      </div>
      <div class="dish">
        <img src="../src/img/pexels-ivan-samkov-8951556.jpg" alt="" />
        <div class="dish-name">
          <h2>California Roll</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Beatae!
          </p>
        </div>
      </div>
      <div class="dish">
        <img src="../src/img/pexels-ivan-samkov-8951556.jpg" alt="" />
        <div class="dish-name">
          <h2>California Roll</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Beatae!
          </p>
        </div>
      </div>
    </div>
  </section>

  <footer>
  <a href="https://github.com/kazmonroy" target=???_blank???>Made by Kaz <i class="fa-brands fa-github"></i></a>
</footer>
    `;

  const homeBtn = document.querySelector("#home");
  const menuBtn = document.querySelector("#menu");
  const aboutUsBtn = document.querySelector("#about-us");

  homeBtn.addEventListener("click", loadHomePage);
  aboutUsBtn.addEventListener("click", loadAboutUs);
  menuBtn.addEventListener("click", loadMenu);
}
