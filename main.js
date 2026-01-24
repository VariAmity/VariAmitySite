// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Header background on scroll
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  
  if (currentScroll > 50) {
    header.style.background = 'rgba(10, 25, 41, 0.98)';
  } else {
    header.style.background = 'rgba(10, 25, 41, 0.9)';
  }
  
  lastScroll = currentScroll;
});

// Show header logo when hero logo starts to scroll out of viewport
const heroLogo = document.querySelector('.hero-logo');

const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      header.classList.remove('logo-visible');
    } else {
      header.classList.add('logo-visible');
    }
  });
}, {
  root: null,
  rootMargin: '-80px 0px 0px 0px',
  threshold: 1
});

heroObserver.observe(heroLogo);

// Intersection Observer for fade-in animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Add animation styles to cards
document.querySelectorAll('.project-card, .philosophy-card').forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = `all 0.6s ease ${index * 0.1}s`;
  observer.observe(card);
});

// Console easter egg
console.log('%c VariAmity ', 'background: #005a96; color: #73fffe; font-size: 24px; font-weight: bold; padding: 10px 20px; border-radius: 8px;');
console.log('%c Building cloud-agnostic open source software ', 'color: #94a3b8; font-size: 14px;');
console.log('%c Check out our projects: https://github.com/VariAmity ', 'color: #73fffe; font-size: 12px;');
