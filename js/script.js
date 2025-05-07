document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".nav-toggle"); // the hamburger button
  const navLinks = document.querySelector(".nav-links"); // the nav list

  toggle.addEventListener("click", () => {
    // Check if aria-expanded is currently "true"
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";

    // Flip it: true → false, false → true
    toggle.setAttribute("aria-expanded", String(!isExpanded));

    // Toggle the class that shows/hides the nav
    navLinks.classList.toggle("nav-open");
  });
});
