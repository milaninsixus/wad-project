/**
 * KrushiMitra — Form Validation & Truthful Interaction Handler
 * Provides comprehensive client-side form validation with honest UI feedback.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNewsletterForms();
  initContactForm();
});

// 1. Newsletter / Weekly Farming Advisory Subscription
function initNewsletterForms() {
  const newsletterForms = document.querySelectorAll('.newsletter-form');

  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const emailInput = form.querySelector('input[type="email"]');
      const alertBox = form.querySelector('.form-feedback-alert') || createInlineAlert(form);
      
      if (!emailInput) return;

      const emailValue = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailValue) {
        emailInput.classList.add('is-invalid');
        showAlert(alertBox, 'Please enter your email address to receive weekly farming alerts.', 'error');
        return;
      }

      if (!emailRegex.test(emailValue)) {
        emailInput.classList.add('is-invalid');
        showAlert(alertBox, 'Please enter a valid email address (e.g., kisan@example.com).', 'error');
        return;
      }

      // Valid input
      emailInput.classList.remove('is-invalid');
      emailInput.value = '';

      // Honest feedback message explicitly stating this is a client demonstration
      showAlert(
        alertBox, 
        `✓ Thank you! In a live deployment, advisory updates would be sent to "${emailValue}". (Client demonstration mode: no backend server is currently connected).`, 
        'success'
      );
    });
  });
}

// 2. Contact Page Form Validation
function initContactForm() {
  const contactForm = document.getElementById('farmerContactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const alertBox = contactForm.querySelector('.form-feedback-alert') || createInlineAlert(contactForm);

    // Fields
    const nameInput = contactForm.querySelector('#contactName');
    const phoneEmailInput = contactForm.querySelector('#contactContact');
    const districtSelect = contactForm.querySelector('#contactDistrict');
    const subjectInput = contactForm.querySelector('#contactSubject');
    const messageInput = contactForm.querySelector('#contactMessage');

    // Reset previous errors
    contactForm.querySelectorAll('.form-control').forEach(ctrl => ctrl.classList.remove('is-invalid'));

    // Validate Name
    if (nameInput && (!nameInput.value.trim() || nameInput.value.trim().length < 2)) {
      nameInput.classList.add('is-invalid');
      isValid = false;
    }

    // Validate Contact (Phone or Email)
    if (phoneEmailInput) {
      const val = phoneEmailInput.value.trim();
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
      const isPhone = /^[0-9+ -]{8,15}$/.test(val);

      if (!val || (!isEmail && !isPhone)) {
        phoneEmailInput.classList.add('is-invalid');
        isValid = false;
      }
    }

    // Validate District
    if (districtSelect && !districtSelect.value) {
      districtSelect.classList.add('is-invalid');
      isValid = false;
    }

    // Validate Subject
    if (subjectInput && !subjectInput.value.trim()) {
      subjectInput.classList.add('is-invalid');
      isValid = false;
    }

    // Validate Message
    if (messageInput && (!messageInput.value.trim() || messageInput.value.trim().length < 10)) {
      messageInput.classList.add('is-invalid');
      isValid = false;
    }

    if (!isValid) {
      showAlert(alertBox, 'Please complete all highlighted fields correctly before submitting.', 'error');
      return;
    }

    // If valid: Clear form and show honest confirmation
    const submittedName = nameInput ? nameInput.value.trim() : 'Farmer';
    contactForm.reset();

    showAlert(
      alertBox,
      `✓ Thank you, ${submittedName}! Your inquiry has passed client-side validation. Since this is an educational static prototype, no email has been sent. For urgent real-world agricultural queries, please dial the Kisan Call Centre at 1800-180-1551.`,
      'success'
    );
  });
}

// Helpers
function createInlineAlert(parentForm) {
  const alert = document.createElement('div');
  alert.className = 'form-feedback-alert';
  parentForm.insertBefore(alert, parentForm.firstChild);
  return alert;
}

function showAlert(alertBox, message, type) {
  alertBox.className = `form-feedback-alert show-${type}`;
  alertBox.textContent = message;
}
