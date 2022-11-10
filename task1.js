Array.prototype.filterArray =  function (cb, thisArg) {
  var filt = [];
  for(let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this) || i < thisArg) filt.push(this[i]);
  }
  return filt;
};
