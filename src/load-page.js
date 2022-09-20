export default function loadPage() {
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
    <a href="./menu.html" class="btn">Order today!</a>
  </div>
</section>

<footer>
  <a href="">Made by Kaz <i class="fa-brands fa-github"></i></a>
</footer>
  
  `;
}
