function loadNavbar() {
    const navbarHTML = `
        <nav>
          <a href="index.html" class="nav-logo">Blog - Rakara Abila</a>
          <ul class="nav-links">
            <li><a href="../index.html#about">About</a></li>
            <li><a href="../index.html#services">Services</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="../index.html#work">Work</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="../index.html#contact" class="nav-cta">Let's Talk</a></li>
          </ul>
          <button class="hamburger" onclick="toggleMenu()" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </nav>

        <!-- MOBILE MENU -->
        <div class="mobile-menu" id="mobileMenu">
          <a href="../index.html#about" onclick="toggleMenu()">About</a>
          <a href="../index.html#services" onclick="toggleMenu()">Services</a>
          <a href=../index.html"#pricing" onclick="toggleMenu()">Pricing</a>
          <a href="../index.html#work" onclick="toggleMenu()">Work</a>
          <a href="#" onclick="toggleMenu()">Blog</a>
          <a href=../index.html"#contact" onclick="toggleMenu()">Contact</a>
        </div>
    `;
    
    const placeholder = document.getElementById("navbar-placeholder");
    if (placeholder) {
        placeholder.innerHTML = navbarHTML;
    }
}

// Run the function once the DOM is ready
document.addEventListener("DOMContentLoaded", loadNavbar);