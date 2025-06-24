

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("joinBtn");
  const modal = document.getElementById("joinModal");
  const closers = modal.querySelectorAll(".close-modal");

  btn.addEventListener("click", () => modal.classList.add("show"));
  closers.forEach(el => el.addEventListener("click", () => modal.classList.remove("show")));

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") modal.classList.remove("show");
  });
});

  document.addEventListener('DOMContentLoaded', function () {
      const navToggle = document.getElementById('nav-toggle');
      const navLinks = document.getElementById('nav-links');
      const hamburgerBars = document.querySelector('.hamburger-bars');
      const hamburgerClose = document.querySelector('.hamburger-close');
      navToggle.addEventListener('click', function () {
          navLinks.classList.toggle('open');
          navToggle.classList.toggle('open');
          if (navLinks.classList.contains('open')) {
              hamburgerBars.style.display = 'none';
              hamburgerClose.style.display = 'block';
          } else {
              hamburgerBars.style.display = 'flex';
              hamburgerClose.style.display = 'none';
          }
      });
      document.querySelectorAll('.links a').forEach(link => {
          link.addEventListener('click', () => {
              if (window.innerWidth < 900) {
                  navLinks.classList.remove('open');
                  navToggle.classList.remove('open');
                  hamburgerBars.style.display = 'flex';
                  hamburgerClose.style.display = 'none';
              }
          });
      });
  });