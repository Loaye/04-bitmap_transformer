'use strict';

const Bitmap = require('../model/bitmap-constructor.js');
const fs = require('fs');

module.exports = (inputFile, callback) => {
  fs.readFile(inputFile, (err, data) => {
    if(err) return callback(err);
    var result = new Bitmap(data);
    // console.log(result);
    if(callback)callback(null, result);
  });
};