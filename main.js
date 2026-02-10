// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    
    // Scroll to top if href is just "#"
    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    const target = document.querySelector(href);
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

// Hero parallax scroll animation
const heroContent = document.querySelector('.hero-content');
const heroVisual = document.querySelector('.hero-visual');
const heroSection = document.querySelector('.hero');

function updateHeroAnimation() {
  const scrollY = window.scrollY;
  const heroHeight = heroSection?.offsetHeight || window.innerHeight;
  
  // Calculate progress (0 to 1) based on scroll position within hero
  const progress = Math.min(scrollY / (heroHeight * 0.6), 1);
  
  // Eased progress for smoother animation
  const easedProgress = progress * progress;
  
  // Calculate animation values
  const opacity = 1 - easedProgress;
  const scale = 1 - (easedProgress * 0.15); // Scale down to 0.85
  const blur = easedProgress * 8; // Up to 8px blur
  
  // Apply to hero content (text side) - fade and blur only, no movement
  if (heroContent) {
    heroContent.style.opacity = opacity;
    heroContent.style.transform = `scale(${scale})`;
    heroContent.style.filter = `blur(${blur}px)`;
  }
  
  // Apply to hero visual (logo side) with slightly different timing - fade and blur only, no movement
  if (heroVisual) {
    const visualProgress = Math.min(scrollY / (heroHeight * 0.5), 1);
    const visualEased = visualProgress * visualProgress;
    const visualOpacity = 1 - visualEased;
    const visualScale = 1 - (visualEased * 0.2); // Scale down more
    const visualBlur = visualEased * 12; // More blur
    
    heroVisual.style.opacity = visualOpacity;
    heroVisual.style.transform = `scale(${visualScale})`;
    heroVisual.style.filter = `blur(${visualBlur}px)`;
  }
}

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  
  if (currentScroll > 50) {
    header.style.background = 'rgba(10, 25, 41, 0.98)';
  } else {
    header.style.background = 'rgba(10, 25, 41, 0.9)';
  }
  
  // Update hero animation
  updateHeroAnimation();
  
  lastScroll = currentScroll;
});

// Initial call to set correct state on page load
updateHeroAnimation();

// Show header logo when hero logo starts to scroll out of viewport
const heroLogo = document.querySelector('.hero-logo');

// Use scroll-based detection for more reliable cross-device behavior
function updateHeaderLogo() {
  if (!heroLogo || !header) return;
  
  const heroLogoRect = heroLogo.getBoundingClientRect();
  const headerHeight = header.offsetHeight || 80;
  
  // Show header logo when hero logo's bottom edge goes above the header
  if (heroLogoRect.bottom < headerHeight) {
    header.classList.add('logo-visible');
  } else {
    header.classList.remove('logo-visible');
  }
}

window.addEventListener('scroll', updateHeaderLogo, { passive: true });
updateHeaderLogo(); // Initial check

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

// Active navigation highlighting based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a[href^="#"]');

function updateActiveNav() {
  const viewportHeight = window.innerHeight;
  let currentSection = null;

  // Highlight the section whose top enters the bottom 40% of the viewport
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= viewportHeight * 0.6) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => link.classList.remove('active'));

  if (currentSection) {
    const activeLink = document.querySelector(`.nav a[href="#${currentSection}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

// Console easter egg
console.log('%c VariAmity ', 'background: #005a96; color: #73fffe; font-size: 24px; font-weight: bold; padding: 10px 20px; border-radius: 8px;');
console.log('%c Building cloud-agnostic open source software ', 'color: #94a3b8; font-size: 14px;');
console.log('%c Check out our projects: https://github.com/VariAmity ', 'color: #73fffe; font-size: 12px;');
