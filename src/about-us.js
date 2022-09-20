import loadPage from "./load-page.js";
import loadAboutUs from "./about-us.js";
import loadMenu from "./menu.js";

export default function loadAboutUsPage() {
  content.innerHTML = `
  <nav>
  <ul class="nav-links">
    <li><a class="link" id="home">Home</a></li>
    <li><a class="link" id="about-us">About us</a></li>
    <li><a class="link" id="menu">Menu</a></li>
  </ul>
</nav>

      <section class="about-us-section">
        <div class="cards">
          <div class="card">
            <div class="card-text">
              <h2>About Us</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
                culpa nesciunt quam porro, architecto eos?
              </p>
            </div>

            <img src="../src/img/sushi-2.jpg" alt="" />
          </div>
          <div class="card">
            <img src="../src/img/sushi-1.jpg" alt="" />
            <div class="card-text">
              <h2>Our mission</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
                culpa nesciunt quam porro, architecto eos?
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer>
      <a href="https://github.com/kazmonroy" target=”_blank”>Made by Kaz <i class="fa-brands fa-github"></i></a>
    </footer>
    </div>`;

  const homeBtn = document.querySelector("#home");
  const menuBtn = document.querySelector("#menu");
  const aboutUsBtn = document.querySelector("#about-us");

  homeBtn.addEventListener("click", loadPage);
  aboutUsBtn.addEventListener("click", loadAboutUs);
  menuBtn.addEventListener("click", loadMenu);
}
