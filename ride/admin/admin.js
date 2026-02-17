// ─── Admin shared JS ────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // Mark active nav link based on current page
  const page = location.pathname.split('/').pop();
  document.querySelectorAll('.nav-link').forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // Toggle switches
  document.querySelectorAll('.toggle').forEach(toggle => {
    toggle.addEventListener('click', () => toggle.classList.toggle('on'));
  });

  // Row click — highlight
  document.querySelectorAll('.data-table tbody tr').forEach(row => {
    row.style.cursor = 'pointer';
    row.addEventListener('click', () => {
      document.querySelectorAll('.data-table tbody tr').forEach(r => r.style.background = '');
      row.style.background = 'rgba(255,180,0,.06)';
    });
  });

  // Chart.js global defaults
  if (typeof Chart !== 'undefined') {
    Chart.defaults.color = '#8a91a8';
    Chart.defaults.font.family = "'DM Sans', sans-serif";
    Chart.defaults.borderColor = '#2a2f3f';
  }
});
