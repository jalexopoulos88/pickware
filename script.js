const progress = document.querySelector('.progress span');
function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const value = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progress.style.width = `${value}%`;
}
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

document.querySelectorAll('.accordion-trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.accordion-item');
    if (item.classList.contains('open')) return;

    document.querySelectorAll('.accordion-item').forEach((entry) => {
      entry.classList.remove('open');
      const button = entry.querySelector('.accordion-trigger');
      button.setAttribute('aria-expanded', 'false');
      button.querySelector('i').textContent = '+';
    });

    item.classList.add('open');
    trigger.setAttribute('aria-expanded', 'true');
    trigger.querySelector('i').textContent = '−';
  });
});

// Start the hero story only after the initial render, so the sequence is visible.
window.addEventListener('load', () => {
  window.setTimeout(() => document.documentElement.classList.add('hero-ready'), 450);
});
