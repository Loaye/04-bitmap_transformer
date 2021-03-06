'use strict';

const fs = require('fs');

module.exports = function(path, bitmap, callback) {
  fs.writeFile(path, bitmap.buff, function(err) {
    if(err) return callback(err);
    callback(null, bitmap.buff);
  });
};

