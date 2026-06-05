  // scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));

  // mobile menu
  function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
  }

  // Formspree AJAX submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const btn = document.getElementById('submitBtn');
      const successMsg = document.getElementById('formSuccess');
      const errorMsg = document.getElementById('formError');
      btn.textContent = 'Sending…';
      btn.disabled = true;
      successMsg.style.display = 'none';
      errorMsg.style.display = 'none';
      try {
        const response = await fetch('https://formspree.io/f/xnjwgpdb', {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(contactForm)
        });
        if (response.ok) {
          contactForm.reset();
          successMsg.style.display = 'block';
          btn.textContent = 'Send Message →';
          btn.disabled = false;
        } else {
          throw new Error('Server error');
        }
      } catch (err) {
        errorMsg.style.display = 'block';
        btn.textContent = 'Send Message →';
        btn.disabled = false;
      }
    });
  }