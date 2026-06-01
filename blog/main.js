/* ============================================================
   Rakara Abila — Portfolio Scripts
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── SCROLL REVEAL ──────────────────────────────────────────
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target); // fire once
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => revealObserver.observe(el));

  // ── MOBILE MENU ────────────────────────────────────────────
  const mobileMenu = document.getElementById('mobileMenu');
  const hamburger  = document.querySelector('.hamburger');

  window.toggleMenu = function () {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  // Close mobile menu when Escape is pressed
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      window.toggleMenu();
    }
  });

  // ── ACTIVE NAV HIGHLIGHT (single-page) ─────────────────────
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a[href^="#"]');
  const navHeight = document.querySelector('nav')?.offsetHeight || 80;

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.removeAttribute('aria-current');
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.setAttribute('aria-current', 'page');
          }
        });
      }
    });
  }, { rootMargin: `-${navHeight}px 0px -60% 0px` });

  sections.forEach(s => sectionObserver.observe(s));

  // ── CONTACT FORM (Formspree AJAX) ──────────────────────────
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const btn        = document.getElementById('submitBtn');
      const successMsg = document.getElementById('formSuccess');
      const errorMsg   = document.getElementById('formError');

      btn.textContent  = 'Sending…';
      btn.disabled     = true;
      successMsg.style.display = 'none';
      errorMsg.style.display   = 'none';

      try {
        const response = await fetch('https://formspree.io/f/xnjwgpdb', {
          method:  'POST',
          headers: { 'Accept': 'application/json' },
          body:    new FormData(contactForm),
        });

        if (response.ok) {
          contactForm.reset();
          successMsg.style.display = 'block';
        } else {
          throw new Error('Server error');
        }
      } catch (err) {
        errorMsg.style.display = 'block';
      } finally {
        btn.textContent = 'Send Message →';
        btn.disabled    = false;
      }
    });
  }

  // ── BLOG FILTER (blog.html only) ───────────────────────────
  const filterBtns = document.querySelectorAll('.filter-btn');
  const blogCards  = document.querySelectorAll('.blog-card[data-category]');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.dataset.filter;
      blogCards.forEach(card => {
        const match = category === 'all' || card.dataset.category === category;
        card.style.display = match ? '' : 'none';
      });
    });
  });

  // ── FOOTER YEAR ───────────────────────────────────────────
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
