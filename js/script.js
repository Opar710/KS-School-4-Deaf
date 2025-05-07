document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("nav-open");

      // Optional: Toggle aria-expanded for accessibility
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", !expanded);
    });
  });
