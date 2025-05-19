"use strict";

import '../scss/style.scss';

import { toggleMenu } from './modules/navigations';

document.addEventListener('DOMContentLoaded', () => {
    toggleMenu();
});

const helloWebpack = (name) => {
    console.log(`Hello from ${name}!`);
}

helloWebpack('Webpack and Babel');