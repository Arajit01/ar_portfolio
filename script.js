// script.js — interactions: contact form & countdown
document.addEventListener('DOMContentLoaded', function () {
  // footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // contact form: fake send (no backend)
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.textContent = 'Sending...';
    setTimeout(() => {
      status.textContent = 'Message sent — I will reply soon!';
      form.reset();
      setTimeout(() => (status.textContent = ''), 3500);
    }, 900);
  });

  // countdown: next availability — 7 days from now
  const target = Date.now() + 7 * 24 * 60 * 60 * 1000;
  const dayEl = document.getElementById('cd-days');
  const hourEl = document.getElementById('cd-hours');
  const minEl = document.getElementById('cd-mins');
  const secEl = document.getElementById('cd-secs');

  function updateCountdown() {
    const diff = Math.max(0, target - Date.now());
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    dayEl.textContent = String(days).padStart(2, '0');
    hourEl.textContent = String(hours).padStart(2, '0');
    minEl.textContent = String(minutes).padStart(2, '0');
    secEl.textContent = String(seconds).padStart(2, '0');
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);
});
