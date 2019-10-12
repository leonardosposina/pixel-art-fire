/*
// Project: Pixel Art Fire :: HTML5 Canvas + JavaScript
// File: firePixel.js - 10/14/2019
// Author: Leonardo Sposina
*/

export default class FirePixel {
  
  #fireColorPalette = ['#070707','#1f0707','#2f0f07','#470f07','#571707','#671f07','#771f07','#8f2707','#9f2f07','#ad3f07','#bf4707','#c74707','#df4f07','#df5707','#df5707','#d75f07','#d75f07', '#d7670f','#cf6f0f','#cf770f','#cf7f0f','#cf8717','#c78717','#c78f17','#c7971f','#bf9f1f','#bf9f1f','#bfa727','#bfa727','#bfaf2f','#b7af2f','#b7b72f','#b7b737','#cfcf6f','#dfdf9f','#efefc7','#ffffff'];
  
  constructor(x, y, colorIndex, context) {
    this.x = x;
    this.y = y;
    this.context = context;
    
    this.updateColorIndex(colorIndex);
  }

  getColorIndex() {
    return this.colorIndex;
  }

  updateColorIndex(colorIndex) {
    this.colorIndex = colorIndex;
    this.context.fillStyle = this.#fireColorPalette[colorIndex];
    this.context.fillRect(this.x, this.y, 1, 1);
  }

}