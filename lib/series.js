'use strict';

function Series(num){
  this.digits = num.toString().split('').map(Number);

};

Series.prototype.slices = function (i) {
  var that = this;
  var newSeries = [];
  var segment = '';
  var increment = i;
  if(i <= this.digits.length){
    for(var j = 0; j<that.digits.length; j++){
      segment = that.digits.slice(j, increment);
      if(segment.length === i){
        newSeries.push(segment);
      }
      increment++;
    }
    return newSeries;
  } else {
    throw new Error('Slice size is too big.')
  }
};
