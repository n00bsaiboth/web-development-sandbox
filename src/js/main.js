"use strict";

import '../scss/style.scss';

import { toggleMenu } from './modules/navigations';
import { backToTop } from './modules/back-to-top';
import { animateOnScroll } from './modules/animateOnScroll';

document.addEventListener('DOMContentLoaded', () => {
    toggleMenu();
    backToTop();
    animateOnScroll();
});

const helloWebpack = (name) => {
    console.log(`Hello from ${name}!`);
}

helloWebpack('Webpack and Babel');