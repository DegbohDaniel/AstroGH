// Add smooth scroll behavior and interactive card effects
document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.animation = entry.target.getAttribute('data-animation') || 'fadeInUp 0.6s ease-out';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all interactive elements
  document.querySelectorAll('.maser-card, .signal-card, .team-card, .news-card, .partner-card').forEach((el) => {
    el.style.opacity = '0';
    observer.observe(el);
  });

  // Interactive maser card details
  const maserCards = document.querySelectorAll('.maser-card-interactive');
  maserCards.forEach((card) => {
    card.addEventListener('click', () => {
      const details = card.querySelector('.maser-details');
      if (details) {
        details.style.maxHeight = details.style.maxHeight ? null : details.scrollHeight + 'px';
      }
    });
  });

  // Enhance publication items with interactivity
  const publicationItems = document.querySelectorAll('.publication-item');
  publicationItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.02)';
    });
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1)';
    });
  });

  // Active navigation link tracking
  const navLinks = document.querySelectorAll('.section-links a');
  const sections = document.querySelectorAll('section[id]');

  const updateActiveNav = () => {
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 150) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.style.color = link.getAttribute('href').slice(1) === current ? 'var(--accent)' : 'var(--text-main)';
    });
  };

  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();

  // Parallax effect for hero background
  const heroShell = document.querySelector('.hero-shell');
  if (heroShell) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset < window.innerHeight) {
        heroShell.style.backgroundPosition = `center ${window.pageYOffset * 0.5}px`;
      }
    });
  }
});
