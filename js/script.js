document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const nav = document.querySelector(".main-nav");
  const miniBtn = document.querySelector(".nav-mini-button");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 2) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }

    if (window.scrollY > 50) {
      nav.classList.add("nav-collapsed");
    } else {
      nav.classList.remove("nav-collapsed");
    }
  });

  miniBtn.addEventListener("click", () => {
    nav.classList.remove("nav-collapsed");
    nav.classList.add("nav-open");  
    toggle.setAttribute("aria-expanded", "true");
  });

  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isExpanded));
    nav.classList.toggle("nav-open"); 
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("nav-open")) {
      nav.classList.remove("nav-open"); 
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A" && nav.classList.contains("nav-open")) {
      nav.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
});
