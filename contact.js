const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.querySelector('i').classList.toggle('fa-bars');
  navToggle.querySelector('i').classList.toggle('fa-xmark');
});

const contactForm = document.getElementById('contact-form');
const formMsg = document.getElementById('form-message');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  formMsg.textContent = 'Thank you for contacting us! We will get back to you soon.';
  formMsg.style.color = '#34a853';
  setTimeout(() => { formMsg.textContent = ""; }, 5000);
  contactForm.reset();
});

