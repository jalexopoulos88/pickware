const items = document.querySelectorAll('.card, .step, .competencies article, .days article');
items.forEach(el => el.classList.add('reveal'));
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
items.forEach(el => observer.observe(el));


// Bubble details also work by tap on mobile
document.querySelectorAll('.skill-bubble').forEach((bubble) => {
  bubble.addEventListener('click', () => {
    const wasActive = bubble.classList.contains('active');
    document.querySelectorAll('.skill-bubble.active').forEach((item) => item.classList.remove('active'));
    if (!wasActive) bubble.classList.add('active');
  });
});
