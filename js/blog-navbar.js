function loadNavbar() {
    const navbarHTML = `
        <nav>
          <a href="index.html" class="nav-logo">Blog - Rakara Abila</a>
          <ul class="nav-links">
            <li><a href="#contact" class="nav-cta">Let's Talk</a></li>
          </ul>
          <button class="hamburger" onclick="toggleMenu()" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </nav>

        <!-- MOBILE MENU -->
        <div class="mobile-menu" id="mobileMenu">
          <a href="#about" onclick="toggleMenu()">About</a>
          <a href="#contact" onclick="toggleMenu()">Contact</a>
        </div>
    `;
    
    const placeholder = document.getElementById("navbar-placeholder");
    if (placeholder) {
        placeholder.innerHTML = navbarHTML;
    }
}

// Run the function once the DOM is ready
document.addEventListener("DOMContentLoaded", loadNavbar);