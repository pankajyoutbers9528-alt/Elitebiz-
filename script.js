document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile Menu
  const mobileMenu = document.getElementById('mobileMenu');
  const navMenu = document.getElementById('navMenu');

  if (mobileMenu && navMenu) {

    mobileMenu.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');

      mobileMenu.setAttribute('aria-expanded', String(isOpen));

      mobileMenu.setAttribute(
        'aria-label',
        isOpen ? 'Close navigation' : 'Open navigation'
      );
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');

        mobileMenu.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-label', 'Open navigation');
      });
    });

    document.addEventListener('click', event => {
      if (
        !navMenu.contains(event.target) &&
        !mobileMenu.contains(event.target)
      ) {
        navMenu.classList.remove('open');
        mobileMenu.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 2. Scroll Progress Bar
  const scrollBar = document.getElementById('scrollBar');

  const updateProgress = () => {
    if (!scrollBar) return;

    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress = scrollable > 0
      ? (window.scrollY / scrollable) * 100
      : 0;

    scrollBar.style.width =
      `${Math.min(100, Math.max(0, progress))}%`;
  };

  window.addEventListener('scroll', updateProgress, {
    passive: true
  });

  updateProgress();

  // 3. Automatic Copyright Year
  const year = document.getElementById('year');

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // 4. Active Navigation Highlight
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll(
    '.nav-menu a[href^="#"]'
  );

  if (
    'IntersectionObserver' in window &&
    sections.length &&
    navLinks.length
  ) {

    const sectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {

          if (!entry.isIntersecting) return;

          navLinks.forEach(link => {
            link.classList.toggle(
              'active',
              link.getAttribute('href') ===
              `#${entry.target.id}`
            );
          });

        });
      },
      {
        rootMargin: '-35% 0px -55% 0px'
      }
    );

    sections.forEach(section => {
      sectionObserver.observe(section);
    });
  }

  // 5. Contact Form
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {

    contactForm.addEventListener('submit', event => {

      event.preventDefault();

      if (!contactForm.reportValidity()) return;

      const name = document
        .getElementById('inputName')
        .value.trim();

      const email = document
        .getElementById('inputEmail')
        .value.trim();

      const subject = document
        .getElementById('inputSubject')
        .value.trim();

      const message = document
        .getElementById('inputMessage')
        .value.trim();

      // अपना असली बिजनेस ईमेल यहां डालें
      const recipient = 'contact@elitebiz.com';

      const mailSubject = encodeURIComponent(
        `EliteBiz enquiry: ${subject}`
      );

      const mailBody = encodeURIComponent(
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Business / service area: ${subject}\n\n` +
        `Message:\n${message}`
      );

      if (formStatus) {
        formStatus.textContent =
          'Your email app should open with the enquiry details. Please review and send the email there.';
      }

      window.location.href =
        `mailto:${recipient}?subject=${mailSubject}&body=${mailBody}`;

    });
  }

});
                          
