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
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.accordion-item').forEach((entry) => {
      entry.classList.remove('open');
      const button = entry.querySelector('.accordion-trigger');
      button.setAttribute('aria-expanded', 'false');
      button.querySelector('i').textContent = '+';
    });

    if (!isOpen) {
      item.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
      trigger.querySelector('i').textContent = '−';
    }
  });
});
