const progress = document.querySelector('.scroll-progress span');
const updateProgress = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
};
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const panels = [...document.querySelectorAll('.match-panel')];
panels.forEach((panel) => {
  const trigger = panel.querySelector('.match-trigger');
  trigger.addEventListener('click', () => {
    const willOpen = !panel.classList.contains('is-open');
    panels.forEach((item) => {
      item.classList.remove('is-open');
      item.querySelector('.match-trigger').setAttribute('aria-expanded', 'false');
    });
    if (willOpen) {
      panel.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });
});
