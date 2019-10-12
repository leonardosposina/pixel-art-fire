/*
// Project: Pixel Art Fire :: HTML5 Canvas + JavaScript
// File: fireGrid.js - 10/14/2019
// Author: Leonardo Sposina
*/

import FirePixel from './firePixel.js';

const FIRE = {'NOT_BURNING': 0, 'BURNING': 36};

export default class FireGrid {

  #grid = [];

  constructor(context) {
    this.context = context;
    this.width = context.canvas.width;
    this.height = context.canvas.height;
    this.lastPixelIndex = (this.width * this.height) - 1;
  }

  createFireGrid() {
    for (let row = 0; row < this.height; row++) {
      for (let column = 0; column < this.width; column++) {
        const pixel = new FirePixel(column, row, FIRE.NOT_BURNING, this.context);
        this.#grid.push(pixel);
      }
    }
  }

  hasFireSource(ignited = true) {
    const firstPixelOfLastLineIndex = this.lastPixelIndex - this.width + 1;

    for (let i = this.lastPixelIndex; i >= firstPixelOfLastLineIndex; i--) {
      const colorIndex = (ignited) ? FIRE.BURNING : FIRE.NOT_BURNING;

      this.#grid[i].updateColorIndex(colorIndex);
    }
  }

  setFireIntensity(intensity = 2) {
    for (let i = this.lastPixelIndex; i >= 0; i--) {
      const abovePixelIndex = (i - this.width) - Math.floor(Math.random() * 2);

      if (abovePixelIndex >= 0) {
        const flameDecay = Math.floor(Math.random() * intensity);
        const fireIntensity = this.#grid[i].getColorIndex() - flameDecay;
        const colorIndex = (fireIntensity >= 0) ? fireIntensity : FIRE.NOT_BURNING;

        this.#grid[abovePixelIndex].updateColorIndex(colorIndex);
      }
    }
  }

}
