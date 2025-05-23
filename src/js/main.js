"use strict";

import '../scss/style.scss';

import { toggleMenu } from './modules/navigations';
import { backToTop } from './modules/back-to-top.js';

document.addEventListener('DOMContentLoaded', () => {
    toggleMenu();
    backToTop();
});

const helloWebpack = (name) => {
    console.log(`Hello from ${name}!`);
}

helloWebpack('Webpack and Babel');