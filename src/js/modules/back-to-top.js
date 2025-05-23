// modules/backToTop.js
"use strict";

const backToTop = () => {
  const button = document.getElementById("back-to-top-button");
  if (!button) return;

  // Show/hide button on scroll
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    button.style.display = scrollY > 20 ? "block" : "none";
  });

  // Scroll to top on click
  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};

export { backToTop };
