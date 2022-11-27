Array.prototype.filterArray = function (cb, thisArg) {
  let arr = [];

  for (let i = 0; i < this.length; i++) {
    let current = this[i];

    if (cb.apply(thisArg, [current, i, this])) {
      arr.push(current);
    }
  }
  return arr;
};
