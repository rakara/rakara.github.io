function loadNavbar() {
    const navbarHTML = `
        <footer>
          <span class="footer-logo">Rakara Abila</span>
          <span class="footer-tagline">Inspiration Beyond Reality.</span>
          <span>© 2026 All rights reserved.</span>
        </footer>
    `;
    
    const placeholder = document.getElementById("footer-placeholder");
    if (placeholder) {
        placeholder.innerHTML = navbarHTML;
    }
}

// Run the function once the DOM is ready
document.addEventListener("DOMContentLoaded", loadNavbar);