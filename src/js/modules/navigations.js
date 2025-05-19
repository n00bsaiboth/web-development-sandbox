"use strict";

const toggleMenu = () => {
    const btn  = document.querySelector('[data-collapse-toggle]');
    const menu = document.getElementById(btn.getAttribute('data-collapse-toggle'));

    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      btn.setAttribute('aria-expanded', menu.classList.contains('hidden') ? 'false' : 'true');
    });
}

export { toggleMenu };