document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const nav = document.querySelector(".main-nav");
  const miniBtn = document.querySelector(".nav-mini-button");
  const defaultLogo = document.querySelector(".default-logo");
  const menuLogo = document.querySelector(".menu-logo");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 2) {
      nav.classList.add("scrolled");
      defaultLogo.style.display = "none";
      menuLogo.style.display = "none";
    } else {
      nav.classList.remove("scrolled");

      if (nav.classList.contains("nav-open")) {
        defaultLogo.style.display = "none";
        menuLogo.style.display = "block";
      } else {
        defaultLogo.style.display = "block";
        menuLogo.style.display = "none";
      }
    }

    if (window.scrollY > 50 && !nav.classList.contains("nav-open")) {
      nav.classList.add("nav-collapsed");
    } else if (!nav.classList.contains("nav-open")) {
      nav.classList.remove("nav-collapsed");
    }
  });

  miniBtn.addEventListener("click", () => {
    nav.classList.remove("nav-collapsed");
    nav.classList.add("nav-open");  
    toggle.setAttribute("aria-expanded", "true");
    navLinks.classList.add("nav-open");
    defaultLogo.style.display = "none";
    menuLogo.style.display = "block";
  });

  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isExpanded));
    nav.classList.toggle("nav-open"); 
    navLinks.classList.toggle("nav-open");

    if (nav.classList.contains("nav-open")) {
      defaultLogo.style.display = "none";
      menuLogo.style.display = "block";
    } else {
      defaultLogo.style.display = "block";
      menuLogo.style.display = "none";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("nav-open")) {
      nav.classList.remove("nav-open"); 
      navLinks.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
      defaultLogo.style.display = "block";
      menuLogo.style.display = "none";
    }
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A" && nav.classList.contains("nav-open")) {
      nav.classList.remove("nav-open");
      navLinks.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
      defaultLogo.style.display = "block";
      menuLogo.style.display = "none";
    }
  });
});
