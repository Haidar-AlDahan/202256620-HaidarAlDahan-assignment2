// =========================
// Theme (Light / Dark)
// =========================

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);

  // Save choice so it stays after refresh
  localStorage.setItem("theme", theme);

  // Update the button label
  const themeButton = document.getElementById("themeToggle");
  if (themeButton) {
    const isDark = theme === "dark";
    themeButton.setAttribute("aria-pressed", isDark ? "true" : "false");

    // Simple: show current mode
    themeButton.textContent = isDark ? "Dark" : "Light";
  }
}

// Decide theme when page opens
function getStartingTheme() {
  // 1) If user picked before, use it
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  // 2) Otherwise follow system preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

// Start theme on page load
const startingTheme = getStartingTheme();
applyTheme(startingTheme);

// Toggle theme on click
const themeButton = document.getElementById("themeToggle");
if (themeButton) {
  themeButton.addEventListener("click", function () {
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "light";

    if (currentTheme === "dark") {
      applyTheme("light");
    } else {
      applyTheme("dark");
    }
  });
}
// Mobile navigation toggle

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.getElementById("nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", isExpanded ? "false" : "true");
  });

  const navItems = navLinks.querySelectorAll("a");
  navItems.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 720) {
      navLinks.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}
// =========================
// Contact form validation (no backend)
// =========================

const form = document.getElementById("contactForm");
if (form) {
  const status = document.getElementById("formStatus");

  function setError(fieldName, message) {
    const errorEl = form.querySelector('[data-error-for="' + fieldName + '"]');
    if (errorEl) {
      errorEl.textContent = message;
    }
  }

  function validateForm() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const message = messageInput ? messageInput.value.trim() : "";

    let valid = true;

    // Name
    if (name.length < 2) {
      setError("name", "Please enter your name (at least 2 characters).");
      valid = false;
    } else {
      setError("name", "");
    }

    // Email (simple check)
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValid) {
      setError("email", "Please enter a valid email.");
      valid = false;
    } else {
      setError("email", "");
    }

    // Message
    if (message.length < 10) {
      setError("message", "Message should be at least 10 characters.");
      valid = false;
    } else {
      setError("message", "");
    }

    return valid;
  }

  // Live validation while typing
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  if (nameInput) {
    nameInput.addEventListener("input", function () {
      if (status) status.textContent = "";
      validateForm();
    });
  }

  if (emailInput) {
    emailInput.addEventListener("input", function () {
      if (status) status.textContent = "";
      validateForm();
    });
  }

  if (messageInput) {
    messageInput.addEventListener("input", function () {
      if (status) status.textContent = "";
      validateForm();
    });
  }

  // On submit
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!validateForm()) {
      if (status) status.textContent = "Fix the errors above and try again.";
      return;
    }

    form.reset();
    setError("name", "");
    setError("email", "");
    setError("message", "");

    if (status) status.textContent = "Message ready (no backend connected).";
  });
}
