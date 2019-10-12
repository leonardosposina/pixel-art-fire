/*
// Project: Pixel Art Fire :: HTML5 Canvas + JavaScript
// File: main.js - 10/14/2019
// Author: Leonardo Sposina
*/

'use strict';

import FireGrid from './fireGrid.js';

const fireSource = document.querySelector('#fire-source');
const fireIntensity = document.querySelector('#fire-intensity');
const canvas = document.querySelector('#fire-canvas');
const context = canvas.getContext('2d');

const grid = new FireGrid(context);

grid.createFireGrid();

const animate = () => {
  grid.hasFireSource(fireSource.checked);
  grid.setFireIntensity(fireIntensity.value);
  window.requestAnimationFrame(animate);
};

window.requestAnimationFrame(animate);
