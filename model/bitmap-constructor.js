'use strict';

const fs = require('fs');

//Gets bitmap data and put into construtor
module.exports = function(data) {
  this.data = data;
  this.id = data.toString('utf-8', 0, 2);
  this.size = data.readUInt32LE(2);
  this.height = data.readUInt32LE(18);
  this.width = data.readUInt32LE(22);
  this.pixelOffSet = data.readUInt32LE(10);
  this.colorArray = data.readUInt32LE(54, this.pixelOffSet);
  //blackout
};
module.exports.prototype.blackOut = function() {
  this.colorArray.fill(0);
  };

//whiteout
module.exports.prototype.whiteOut = function() {
  this.colorArray.fill(f);
};

//greyout
module.exports.prototype.grayOut = function() {
  this.colorArray.fill(c);
};

//reverse
module.exports.prototype.reversed = function() {
  this.pixelOffSet.reverse();
};

//random
module.exports.prototype.random = function(){
  for(var i = 0; i< this.colorArray.length; i+=4){
    this.colorArray[i] = Math.floor(Math.random() *255) +1;
  };
};


