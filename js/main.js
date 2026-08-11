/* ===========================
   CONSTRUCTION COMPANY WEBSITE
   MAIN JAVASCRIPT
   =========================== */

// ========== MOBILE NAVIGATION TOGGLE ==========

document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('nav ul');
  const navCta = document.querySelector('.nav-cta');

  if (navCta) {
    const currentPath = window.location.pathname.split('/').pop();
    if (currentPath === 'contact.html' || currentPath === 'pages/contact.html') {
      navCta.classList.add('is-current-page');
    }
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!event.target.closest('nav') && !event.target.closest('.nav-toggle')) {
        navMenu.classList.remove('active');
      }
    });
  }

  // ========== HERO SLIDER ==========

  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');
  const prevButton = document.querySelector('.slider-arrow.prev');
  const nextButton = document.querySelector('.slider-arrow.next');

  let heroIndex = 0;
  let autoSlider;

  if (slides.length > 1) {
    const showSlide = (index) => {
      heroIndex = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => slide.classList.toggle('is-active', i === heroIndex));
      dots.forEach((dot, i) => dot.classList.toggle('is-active', i === heroIndex));
    };

    const startAutoSlider = () => {
      clearInterval(autoSlider);
      autoSlider = setInterval(() => {
        showSlide(heroIndex + 1);
      }, 5000);
    };

    if (prevButton) {
      prevButton.addEventListener('click', () => {
        showSlide(heroIndex - 1);
        startAutoSlider();
      });
    }

    if (nextButton) {
      nextButton.addEventListener('click', () => {
        showSlide(heroIndex + 1);
        startAutoSlider();
      });
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showSlide(index);
        startAutoSlider();
      });
    });

    startAutoSlider();
  }

  // Service card hover exit effect
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseleave', function() {
      this.classList.remove('bubble-drop');
      void this.offsetWidth;
      this.classList.add('bubble-drop');
    });

    card.addEventListener('animationend', function() {
      this.classList.remove('bubble-drop');
    });
  });

  // Set active navigation link based on current page
  setActiveNavLink();
});

function setActiveNavLink() {
  const navLinks = document.querySelectorAll('nav a');
  const currentPath = window.location.pathname;

  navLinks.forEach(link => {
    link.classList.remove('active');
    
    // Get the href attribute
    let href = link.getAttribute('href');

    // Handle different URL patterns
    if (currentPath.includes('index.html') || currentPath.endsWith('/')) {
      if (href === 'index.html' || href === './' || href === '/') {
        link.classList.add('active');
      }
    } else if (currentPath.includes('about')) {
      if (href.includes('about')) {
        link.classList.add('active');
      }
    } else if (currentPath.includes('contact')) {
      if (href.includes('contact')) {
        link.classList.add('active');
      }
    }
  });
}

// ========== SMOOTH SCROLLING ==========

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    
    // Only prevent default if it's a valid anchor link
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      
      const target = document.querySelector(href);
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ========== FORM HANDLING ==========

const contactForm = document.querySelector('form[name="contact-form"]');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    
    // Validate form
    if (!validateForm(this)) {
      console.log('Form validation failed');
      return;
    }

    // Show success message (since this is a static site)
    showFormMessage(this, 'Thank you! We will contact you soon.', 'success');
    
    // Reset form
    this.reset();
  });
}

function validateForm(form) {
  const inputs = form.querySelectorAll('input, textarea');
  let isValid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.classList.add('error');
      isValid = false;
    } else {
      input.classList.remove('error');
    }

    // Validate email
    if (input.type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (input.value && !emailRegex.test(input.value)) {
        input.classList.add('error');
        isValid = false;
      }
    }
  });

  return isValid;
}

function showFormMessage(form, message, type) {
  // Remove existing message if present
  const existingMessage = form.querySelector('.form-message');
  if (existingMessage) {
    existingMessage.remove();
  }

  // Create and display message
  const messageDiv = document.createElement('div');
  messageDiv.className = `form-message form-message--${type}`;
  messageDiv.textContent = message;

  form.prepend(messageDiv);

  // Remove message after 5 seconds
  setTimeout(() => {
    messageDiv.remove();
  }, 5000);
}

// ========== SCROLL ANIMATIONS (Optional) ==========

// Observe elements for fade-in animations on scroll
if ('IntersectionObserver' in window) {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections for fade-in effect
  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });
}

// ========== UTILITY FUNCTIONS ==========

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Expose utility functions to window for inline event handlers if needed
window.scrollToTop = scrollToTop;
