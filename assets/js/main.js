/**
 * KrushiMitra — Core Application JavaScript
 * Handles navigation, mobile drawer, accordions, back-to-top, toast messages, and language switcher
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileDrawer();
  initBackToTop();
  initAccordions();
  initLanguageSwitcher();
  initToast();
  highlightActiveNavLink();
});

// 1. Header scroll effect
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// 2. Mobile Drawer Navigation
function initMobileDrawer() {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const backdrop = document.querySelector('.drawer-backdrop');
  const closeBtn = document.querySelector('.drawer-close-btn');

  if (!drawer || !backdrop) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  // Close drawer when pressing Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

// 3. Back to Top Button
function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top-btn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// 4. Accessible Accordion Component
function initAccordions() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach((item) => {
    const trigger = item.querySelector('.accordion-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close other open accordion items in the same container if desired
      const parent = item.closest('.accordion');
      if (parent && !parent.hasAttribute('data-allow-multiple')) {
        parent.querySelectorAll('.accordion-item').forEach((sibling) => {
          if (sibling !== item) sibling.classList.remove('open');
        });
      }

      // Toggle current
      item.classList.toggle('open', !isOpen);
      trigger.setAttribute('aria-expanded', !isOpen);
    });
  });
}

// 5. Language Switcher Interface
function initLanguageSwitcher() {
  const langTriggerBtns = document.querySelectorAll('.lang-selector-btn');
  const langModal = document.querySelector('.lang-modal');
  const langCloseBtn = document.querySelector('.lang-modal-close');
  const langOptions = document.querySelectorAll('.lang-opt-btn');

  if (!langModal) return;

  const openLangModal = () => {
    langModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeLangModal = () => {
    langModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  langTriggerBtns.forEach(btn => btn.addEventListener('click', openLangModal));
  if (langCloseBtn) langCloseBtn.addEventListener('click', closeLangModal);

  langModal.addEventListener('click', (e) => {
    if (e.target === langModal) closeLangModal();
  });

  // Handle language selection (Client-side simulation with notice)
  langOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      const lang = opt.getAttribute('data-lang');
      const langName = opt.querySelector('.lang-opt-title').textContent.trim();
      
      langOptions.forEach(b => b.classList.remove('active'));
      opt.classList.add('active');

      langTriggerBtns.forEach(btn => {
        const textSpan = btn.querySelector('.current-lang-text');
        if (textSpan) textSpan.textContent = lang.toUpperCase();
      });

      closeLangModal();
      
      if (lang === 'gu') {
        showToast('ભાષા ગુજરાતી પસંદ કરવામાં આવી છે. કૃષિમિત્રમાં સ્વાગત છે! (Selected Gujarati)');
      } else if (lang === 'hi') {
        showToast('भाषा हिंदी चुनी गई है। कृषिमित्र में आपका स्वागत है! (Selected Hindi)');
      } else {
        showToast(`Language switched to ${langName}.`);
      }
    });
  });
}

// 6. Global Toast Notification System
function initToast() {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    toast.innerHTML = `<span class="toast-icon">🌾</span> <span class="toast-message"></span>`;
    document.body.appendChild(toast);
  }
}

function showToast(message, duration = 3800) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) return;

  const msgSpan = toast.querySelector('.toast-message');
  if (msgSpan) msgSpan.textContent = message;

  toast.classList.add('show');

  if (window.toastTimeout) clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}

// 7. Highlight Active Navigation Link based on current URL path
function highlightActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links .nav-link, .mobile-nav-links .nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    
    // Normalize comparison
    const linkPath = href.split('/').pop();
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.classList.add('active');
    }
  });
}
