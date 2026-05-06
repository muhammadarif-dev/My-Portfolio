// EmailJS Init
emailjs.init("Dj5xohpzZJCaUn_gY");

// Contact Form
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const btn = document.getElementById('submitBtn');
  const btnText = document.getElementById('btnText');
  const formMsg = document.getElementById('formMsg');

  btnText.textContent = 'Sending...';
  btn.disabled = true;

  emailjs.sendForm('service_br1yl0v', 'template_8jwzc1j', this)
    .then(() => {
      formMsg.style.display = 'block';
      formMsg.style.color = '#4ade80';
      formMsg.innerHTML = 'Message sent! I will reply soon.';
      btnText.textContent = 'Send Message';
      btn.disabled = false;
      this.reset();
    }, () => {
      formMsg.style.display = 'block';
      formMsg.style.color = '#f87171';
      formMsg.innerHTML = 'Something went wrong. Please try again.';
      btnText.textContent = 'Send Message';
      btn.disabled = false;
    });
});

// Scroll Fade-Up Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 100);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Mobile Nav Toggle
const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    toggle.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Active Nav Link on Scroll
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute('id');
  });
  navAnchors.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
});
