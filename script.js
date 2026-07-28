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


// Animate the hero with the Web Animations API. The text stays visible if
// JavaScript is blocked or the browser does not support the API.
function startHeroStory() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const sequence = [
    ...document.querySelectorAll('.hero-sequence span'),
    document.querySelector('.hero-thesis'),
    ...document.querySelectorAll('.hero-story span'),
    document.querySelector('.hero-actions')
  ].filter(Boolean);

  if (!sequence.length || typeof sequence[0].animate !== 'function') return;

  const delays = [300, 1350, 2400, 3550, 4550, 5250, 5950, 6650, 7550];

  sequence.forEach((element, index) => {
    element.animate(
      [
        { opacity: 0, transform: 'translateY(16px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ],
      {
        duration: index < 3 ? 900 : 700,
        delay: delays[index] ?? index * 800,
        easing: 'cubic-bezier(.2,.8,.2,1)',
        fill: 'both'
      }
    );
  });
}

if (document.readyState === 'complete') {
  window.setTimeout(startHeroStory, 150);
} else {
  window.addEventListener('load', () => window.setTimeout(startHeroStory, 150), { once: true });
}
