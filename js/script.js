document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isExpanded));
    navLinks.classList.toggle("nav-open");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinks.classList.contains("nav-open")) {
      navLinks.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A" && navLinks.classList.contains("nav-open")) {
      navLinks.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
});

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".main-nav");
  if (window.scrollY > 10) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});