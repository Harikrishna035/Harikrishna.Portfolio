const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (event) => { glow.style.left = `${event.clientX}px`; glow.style.top = `${event.clientY}px`; });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));

document.querySelectorAll('.project-visual').forEach((item) => {
  item.addEventListener('mousemove', (event) => {
    const rect = item.getBoundingClientRect();
    const graphic = item.querySelector('.graphic');
    const x = (event.clientX - rect.left - rect.width / 2) * .025;
    const y = (event.clientY - rect.top - rect.height / 2) * .025;
    graphic.style.transform = graphic.classList.contains('graphic-one') ? `translate(${x}px, ${y}px) rotate(-9deg)` : `translate(${x}px, ${y}px)`;
  });
  item.addEventListener('mouseleave', () => { item.querySelector('.graphic').style.transform = ''; });
});
