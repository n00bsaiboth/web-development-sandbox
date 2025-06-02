"use strict";

const animateOnScroll = () => {
  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const content = entry.target.querySelector(".content");
          if (content) {
            content.classList.remove("translate-x-full", "-translate-x-full", "opacity-0");
            content.classList.add("translate-x-0", "opacity-100");
          }
          observerInstance.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".grid-left, .grid-right").forEach((el) => {
    observer.observe(el);
  });
};

export { animateOnScroll };
