'use strict';

const fs = require('fs');

// const Bitmap = require(`${__dirname}/model/bitmap-constructor.js`);
const read = require(`${__dirname}/lib/read-file.js`);
const write = require(`${__dirname}/lib/write-file.js`);
var bitmapImage = read(`${__dirname}/assets/palette-bitmap.bmp`, (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log(bitmapImage, 'final test');